import { Injectable } from '@nestjs/common';
import { ScheduleGames } from './Entities/schedule.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScheduleGameDocument } from 'src/schema/scheduleGames/scheduleGames.schema';
import type { ScheduleGames as games } from '@my-mlb/shared';
@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(ScheduleGames.name)
    private readonly scheduleGamesModel: Model<ScheduleGameDocument>,
  ) {}

  async createScheduleGames(scheduleGames: ScheduleGames[]) {
    this.scheduleGamesModel.create(scheduleGames);
  }

  async getScheduleGames(startDate: string, endDate: string): Promise<games[]> {
    const scheduleGames = await this.scheduleGamesModel.aggregate([
      {
        $match: {
          date: { $gte: startDate, $lte: endDate },
        },
      },
    ]);

    return scheduleGames;
  }

  async getScheduleGamesById(): Promise<games[]> {
    const scheduleGamesById = await this.scheduleGamesModel.aggregate([
      { $unwind: '$games' },
      {
        $project: {
          _id: 0,
          game: '$games.id',
        },
      },
    ]);

    return scheduleGamesById.map((g) => g.game);
  }
}
