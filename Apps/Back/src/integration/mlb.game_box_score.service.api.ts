import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { apiUrl, format, locale, token } from 'src/Security/env.credentials';
import { Game as boxScoreGames, BoxScore, Games } from '@my-mlb/shared';
import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';
import { GamesBoxScoreApp } from 'src/app/gamesBoxScore.app';
@Injectable()
export class MlbBoxScoreGamesServiceApi {
  constructor(
    private readonly gamesBoxScoreApp: GamesBoxScoreApp,
    private readonly scheduleGamesService: ScheduleService,
  ) {}

  async getBoxScoreGamesFromApi(games?: Games[]) {
    try {
      const scheduleGames = !games?.length
        ? (await this.scheduleGamesService.getAllScheduleGames()).filter(
            (e) => e.status === 'closed',
          )
        : games;

      const gameBoxScore: boxScoreGames[] = [];

      await Promise.all(
        scheduleGames!.map(async (games) => {
          const response = await fetch(
            `${apiUrl}/${locale}/games/${games.id}/boxscore.${format}?api_key=${token}`,
          );

          const data = (await response.json()) as BoxScore;

          if (!data || !data.game) {
            Logger.error(
              `Game ${games.id} returned invalid payload: ${JSON.stringify(data)}`,
            );
            return;
          }

          if (Array.isArray(data.game)) {
            Logger.error(
              `API error for game ${games.id}: ${JSON.stringify(data)}`,
            );
            return [];
          } else {
            Logger.warn('Pushing Games Boxscore into array');
            gameBoxScore.push(this.sanitizeGame(data.game));
          }
        }),
      );
      Logger.log('injecting games');
      await this.gamesBoxScoreApp['gamexBoxScoreService'].creatGamesBoxScore(
        gameBoxScore,
      );
    } catch (erro) {
      Logger.error(`erro fetching games from api: ${erro}`);
    }
  }

  private sanitizeGame(game: any) {
    if (!game) return game;

    const fix = (v: any) => (v === 'X' || v === '' || v === null ? null : v);

    ['home', 'away'].forEach((side) => {
      const team = game[side];

      if (!team) return;

      if (!Array.isArray(team.scoring)) return;

      team.scoring = team.scoring.map((inning: any) => ({
        ...inning,
        runs: fix(inning?.runs),
        hits: fix(inning?.hits),
        errors: fix(inning?.errors),
      }));
    });

    return game;
  }
}
