import { Injectable } from '@nestjs/common';
import { ScheduleGamesApp } from 'src/app/scheduleGames.app';
import { Logger } from '@nestjs/common';
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

    if (existingGames.length) {
      existingGames.forEach((existingList) => {
        games.games.forEach((newGame) => {
          existingList.games.forEach((existingGame) => {
            if (
              newGame.id === existingGame.id &&
              newGame.ps_round === existingGame.ps_round
            ) {
              Logger.warn(
                `Game with id ${newGame.id} already exists for date ${games.date}`,
              );
            } else {
              this.scheduleGamesApp['scheduleService'].createScheduleGames([
                games,
              ]);
              Logger.log(
                `Storing new game with id ${newGame.id} for date ${games.date}`,
              );
            }
          });
        });
      });
    } else {
      this.scheduleGamesApp['scheduleService'].createScheduleGames([games]);
      Logger.log(`Storing games for new date ${games.date}`);
    }
  }
}
