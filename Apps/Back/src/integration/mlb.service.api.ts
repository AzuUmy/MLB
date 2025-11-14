import { Injectable } from '@nestjs/common';
import { ScheduleGamesApp } from 'src/app/scheduleGames.app';
import { Logger } from '@nestjs/common';
import { Games, ScheduleGames } from '@my-mlb/shared/Types/gamesMLBTypes';
import { toTimestamp } from 'src/helper/date';
@Injectable()
export class MlbServiceApi {
  constructor(private readonly scheduleGamesApp: ScheduleGamesApp) {}

  async fetchDailyScheduleGames() {
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const games = await this.scheduleGamesApp.getScheduleGamesFromApi(
      year,
      month,
      day,
    );

    if (!games || !games.games?.length) {
      Logger.warn('No games found for today');
      return;
    }

    const existingGames = await this.scheduleGamesApp[
      'scheduleService'
    ].getScheduleGames(games.date, games.date);

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


