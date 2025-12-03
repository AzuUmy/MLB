import { Injectable, Logger } from '@nestjs/common';
import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';
import { ScheduleGamesSeries } from 'src/Graphql/ScheduleGames/Entities/schedule.entity';
import { getCurrentDateInYearMonthDay } from 'src/helper/date';
import { MlbBoxScoreGamesServiceApi } from 'src/integration/mlb.game_box_score.service.api';
import { Games } from '@my-mlb/shared';
@Injectable()
export class ScheduleGamesApp {
  constructor(
    private readonly scheduleService: ScheduleService,
    private readonly mlbBoxScoreGamesServiceApi: MlbBoxScoreGamesServiceApi,
  ) {}

  async getScheduleGamesSeries(
    startDate: string,
    endDate: string,
  ): Promise<ScheduleGamesSeries[]> {
    const scheduleGames = await this.scheduleService.getScheduleGamesByDate(
      startDate,
      endDate,
    );

    const seriesMap = new Map<string, ScheduleGamesSeries>();

    for (const schedule of scheduleGames) {
      for (const game of schedule.games) {
        const serie = game.ps_round;
        const home = game.home.abbr;
        const away = game.away.abbr;

        const matchupKey = [home, away].sort().join('_') + '_' + serie;

        if (!seriesMap.has(matchupKey)) {
          seriesMap.set(matchupKey, {
            series: serie,
            games: [],
          } as ScheduleGamesSeries);
        }
        seriesMap.get(matchupKey)!.games.push(game);
      }
    }

    const scheduleGamesSeries = Array.from(seriesMap.values());

    for (const s of scheduleGamesSeries) {
      s.games.sort((a, b) => Number(a.ps_game ?? 0) - Number(b.ps_game ?? 0));
    }

    const parseSeries = (series: string) => {
      const league = series.startsWith('AL')
        ? 'AL'
        : series.startsWith('NL')
          ? 'NL'
          : null;
      const stage = league ? series.slice(league.length) : series;
      return { league, stage };
    };

    const stageGroups: Record<
      string,
      {
        AL: ScheduleGamesSeries[];
        NL: ScheduleGamesSeries[];
        other: ScheduleGamesSeries[];
      }
    > = {};

    for (const s of scheduleGamesSeries) {
      const { league, stage } = parseSeries(s.series);
      if (!stageGroups[stage]) {
        stageGroups[stage] = { AL: [], NL: [], other: [] };
      }

      if (league === 'AL') stageGroups[stage].AL.push(s);
      else if (league === 'NL') stageGroups[stage].NL.push(s);
      else stageGroups[stage].other.push(s);
    }

    const stageOrder = ['WC', 'DS', 'CS', 'WS'];
    const result: ScheduleGamesSeries[] = [];

    for (const stage of stageOrder) {
      const group = stageGroups[stage];
      if (!group) continue;

      if (stage === 'WS') {
        result.push(...group.AL, ...group.NL, ...group.other);
        continue;
      }

      const max = Math.max(group.AL.length, group.NL.length);
      for (let i = 0; i < max; i++) {
        if (i < group.AL.length) result.push(group.AL[i]);
        if (i < group.NL.length) result.push(group.NL[i]);
      }

      result.push(...group.other);
    }

    return result;
  }

  async checkGamesStatus() {
    const date = new Date();
    const today = getCurrentDateInYearMonthDay(date);

    const scheduleGamesOfTheDay =
      await this.scheduleService.getScheduleGamesByDate(today, today);

    const allGames = scheduleGamesOfTheDay.flatMap((e) => e.games);

    if (allGames.length === 0) {
      Logger.warn(`No games found in the provided date, ${today}`);
      return;
    }

    const closedGamesOnDate: Games[] = [];

    allGames.map((e) => {
      if (e.status === 'closed') {
        closedGamesOnDate.push(e);
      }
    });

    this.mlbBoxScoreGamesServiceApi.getBoxScoreGamesFromApi(closedGamesOnDate);
  }
}
