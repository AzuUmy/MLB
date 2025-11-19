import { Module } from '@nestjs/common';
import { GamesBoxScoreService } from './gamesBoxScore.service';
import { GamesBoxScoreResolver } from './gamesBoxScore.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ScheduleGames,
  ScheduleGamesSchema,
} from 'src/schema/scheduleGames/scheduleGames.schema';
import { GamesBoxScoreApp } from 'src/app/gamesBoxScore.app';
import { ScheduleModule } from '../ScheduleGames/schedule.modules';
import { MlbBoxScoreGamesServiceApi } from 'src/integration/mlb.game_box_score.service.api';
import { Game, GameSchema } from 'src/schema/gamesBoxScore/game.schema';

@Module({
  imports: [
    ScheduleModule,
    MongooseModule.forFeature([
      { name: ScheduleGames.name, schema: ScheduleGamesSchema },
      { name: Game.name, schema: GameSchema },
    ]),
  ],
  providers: [
    GamesBoxScoreService,
    GamesBoxScoreResolver,
    GamesBoxScoreApp,
    MlbBoxScoreGamesServiceApi,
  ],
  exports: [GamesBoxScoreService],
})
export class gamesBoxScoreModules {}
