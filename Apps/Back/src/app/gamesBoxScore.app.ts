import { Injectable, Logger } from '@nestjs/common';
import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';

@Injectable()
export class GamesBoxScoreApp {
  constructor(private readonly scheduleService: ScheduleService) {}

  async getGamesBoxScore() {
    const gamesBoxScore = await this.scheduleService.getScheduleGamesById();
    Logger.log('games boxScore id for testing', gamesBoxScore);
  }
}
