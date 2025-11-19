import { ScheduleGames } from './Entities/schedule.entity';
import { Model } from 'mongoose';
import { ScheduleGameDocument } from 'src/schema/scheduleGames/scheduleGames.schema';
import type { Games, ScheduleGames as games } from '@my-mlb/shared';
export declare class ScheduleService {
    private readonly scheduleGamesModel;
    constructor(scheduleGamesModel: Model<ScheduleGameDocument>);
    createScheduleGames(scheduleGames: ScheduleGames[]): Promise<void>;
    getAllScheduleGames(): Promise<Games[]>;
    getScheduleGamesByDate(startDate: string, endDate: string): Promise<games[]>;
    getScheduleGamesById(): Promise<string[]>;
}
