import { Injectable } from '@nestjs/common';
import { ScheduleGamesApp } from 'src/app/scheduleGames.app';
import { Logger } from '@nestjs/common';
import { toTimestamp } from 'src/helper/date';
import { apiUrl, format, locale, token } from 'src/Security/env.credentials';
import { ScheduleGames, Games } from '@my-mlb/shared';
@Injectable()
export class MlbScheduleGamesServiceApi {
  constructor(private readonly scheduleGamesApp: ScheduleGamesApp) {}

  async getScheduleGamesFromApi(
    year: string,
    month: string,
    day: string,
  ): Promise<ScheduleGames | undefined> {
    try {
      const response = await fetch(
        `${apiUrl}/${locale}/games/${year}/${month}/${day}/schedule.${format}?api_key=${token}`,
      );
      const data = (await response.json()) as ScheduleGames;
      return data;
    } catch (erro) {
      Logger.error(`Error fetching schedule games from api: ${erro}`);
      return undefined;
    }
  }

  async fetchDailyScheduleGames() {
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const games = await this.getScheduleGamesFromApi(year, month, day);

    if (!games || !games.games?.length) {
      Logger.warn('No games found for today');
      return;
    }

    const existingGames = await this.scheduleGamesApp[
      'scheduleService'
    ].getScheduleGamesByDate(games.date, games.date);

    const matchingGames: { id: string; serie: string; date: string }[] = [];

    games.games.forEach((game) => {
      matchingGames.push({
        id: game.id,
        serie: game.ps_round,
        date: games.date,
      });
    });

    const hasDuplicates = existingGames.some((existingGame) =>
      existingGame.games.some((game) =>
        matchingGames.some(
          (matching) =>
            matching.id === game.id &&
            matching.serie === game.ps_round &&
            matching.date === games.date,
        ),
      ),
    );

    if (hasDuplicates) {
      Logger.warn('Games for today already exist in the database');
      return;
    }

    const newScheduleGame: ScheduleGames[] = [];
    const newGame: Games[] = [];

    games.games.forEach((game) => {
      const ts = toTimestamp(game.scheduled);

      newGame.push({
        ...game,
        scheduled: ts !== null ? ts.toString() : game.scheduled,
      });
    });

    newScheduleGame.push({
      league: games.league,
      date: games.date,
      games: newGame,
      _comment: games._comment,
    });

    await this.scheduleGamesApp['scheduleService'].createScheduleGames(
      newScheduleGame,
    );

    Logger.log("Successfully fetched and stored today's schedule games");
  }
}
