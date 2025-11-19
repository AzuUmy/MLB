import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { apiUrl, format, locale, token } from 'src/services/Api/api';
import { Game as boxScoreGames, BoxScore } from '@my-mlb/shared';
import { GamesBoxScoreService } from 'src/Graphql/GamesBoxScore/gamesBoxScore.service';
@Injectable()
export class MlbBoxScoreGamesServiceApi {
  constructor(private readonly gamesBoxScoreService: GamesBoxScoreService) {}

  async getBoxScoreGamesFromApi(id: string[]) {
    try {
      const gameBoxScore: boxScoreGames[] = [];

      await Promise.all(
        id.map(async (gamesId) => {
          const response = await fetch(
            `${apiUrl}/${locale}/games/${gamesId}/boxscore.${format}?api_key=${token}`,
          );

          const data = (await response.json()) as BoxScore;

          if (!data || !data.game) {
            Logger.error(
              `Game ${gamesId} returned invalid payload: ${JSON.stringify(data)}`,
            );
            return;
          }

          if (Array.isArray(data.game)) {
            Logger.error(
              `API error for game ${gamesId}: ${JSON.stringify(data)}`,
            );
            return [];
          } else {
            Logger.warn('Pushing Games Boxscore into array');
            gameBoxScore.push(this.sanitizeGame(data.game));
          }
        }),
      );
      Logger.log('injecting games');
      await this.gamesBoxScoreService.creatGamesBoxScore(gameBoxScore);
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
