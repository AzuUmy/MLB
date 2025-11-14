import { Injectable } from '@nestjs/common';
import { ScheduleGames as games } from '@my-mlb/shared/Types/gamesMLBTypes';
import { ScheduleGames } from '../ScheduleGames/Entities/schedule.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class GamesBoxScoreService {}
