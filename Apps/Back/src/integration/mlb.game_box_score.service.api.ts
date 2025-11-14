import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { apiUrl, format, locale, token } from 'src/services/Api/api';
import { Game as boxScoreGames } from '@my-mlb/shared';

@Injectable()
export class MlbBoxScoreGamesServiceApi {
  async getBoxScoreGamesFromApi(id: string[]): Promise<any[] | undefined> {
    try {
      const gameBoxScore: boxScoreGames[] = [];
      await Promise.all(
        id.map(async (gamesId) => {
          const response = await fetch(
            `${apiUrl}/${locale}/games/${gamesId}/boxscore.${format}?api_key=${token}`,
          );

          const data = (await response.json()) as boxScoreGames;

          if (Array.isArray(data)) {
            Logger.error(
              `API error for game ${gamesId}: ${JSON.stringify(data)}`,
            );
            return [];
          } else {
            gameBoxScore.push(data);
          }
        }),
      );

      Logger.log('teste of games', gameBoxScore);

      return gameBoxScore;
    } catch (erro) {
      Logger.error(`erro fetching games from api: ${erro}`);
    }
  }
}
