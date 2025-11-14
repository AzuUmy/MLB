import { Injectable } from '@nestjs/common';
import { GamesBoxScoreApp } from 'src/app/gamesBoxScore.app';
import { Game } from 'src/Graphql/GamesBoxScore/Entities/Game.entity';
import { Logger } from '@nestjs/common';
import { apiUrl, format, locale, token } from 'src/services/Api/api';
import { Game as boxScoreGames } from '@my-mlb/shared';

@Injectable()
export class MlbBoxScoreGamesServiceApi {

  async getBoxScoreGamesFromApi(id: string[]): Promise<boxScoreGames[] | undefined> {
    try {
      const gameBoxScore: boxScoreGames[] = [];

      id.forEach(async (gamesId) => {
        const response = await fetch(
          `${apiUrl}/${locale}/games/${gamesId}/boxscore.${format}?api_key=${token}`,
        );
        const data = (await response.json()) as boxScoreGames[];

        gameBoxScore.push(...data);
      });

      return gameBoxScore

    } catch (erro) {
      Logger.error(`erro fetching games from api: ${erro}`);
    }
  }
}
