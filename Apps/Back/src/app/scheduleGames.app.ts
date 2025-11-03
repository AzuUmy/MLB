import { Injectable } from '@nestjs/common';
import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';
import { ScheduleGamesSeries } from 'src/Graphql/ScheduleGames/Entities/schedule.entity';
import { Logger } from '@nestjs/common';
import { apiUrl, format, locale, token } from 'src/services/Api/api';
import { ScheduleGames } from '@my-mlb/shared/Types/gamesMLBTypes';
@Injectable()
export class ScheduleGamesApp {
  constructor(private readonly scheduleService: ScheduleService) {}

  async getScheduleGamesSeries(
    startDate: string,
    endDate: string,
  ): Promise<ScheduleGamesSeries[]> {
    const scheduleGames = await this.scheduleService.getScheduleGames(
      startDate,
      endDate,
    );

    const scheduleGamesSeries: ScheduleGamesSeries[] = [];

    scheduleGames.forEach((schedule) => {
      const series = schedule.games.map((e) => e.ps_round);
      const games = schedule.games;

      series.forEach((serie) => {
        if (!scheduleGamesSeries.map((e) => e.series).includes(serie)) {
          scheduleGamesSeries.push({
            series: serie,
            games: games,
          });
        }
      });
    });

    return scheduleGamesSeries;
  }

  async getScheduleGamesFromApi(year: string, month: string, day: string): Promise<ScheduleGames | undefined> {
    try {
      const response = await fetch(
        `${apiUrl}/${locale}/games/${year}/${month}/${day}/schedule.${format}?api_key=${token}`,
      );
      const data = (await response.json()) as ScheduleGames;
      return data;
    } catch (error) {
      Logger.error('Error fetching schedule games from API:', error);
      return undefined;
    }
  }
}
