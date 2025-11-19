import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { CronService } from './cron.service';
import { MlbScheduleService } from 'src/cron/services/schedule.games.cron.service';
import { MlbScheduleGamesServiceApi } from 'src/integration/mlb.schedule_games.service.api';
import { ScheduleGamesApp } from 'src/app/scheduleGames.app';
import { ScheduleService } from 'src/Graphql/ScheduleGames/schedule.service';
import { ScheduleGames } from 'src/Graphql/ScheduleGames/Entities/schedule.entity';
import { ScheduleGamesSchema } from 'src/schema/scheduleGames/scheduleGames.schema';
import { Game, GameSchema } from 'src/schema/gamesBoxScore/game.schema';
import { GamesBoxScoreService } from 'src/Graphql/GamesBoxScore/gamesBoxScore.service';
import { MlbSGamesBoxScoreService } from './services/games.box.score.cron.service';
import { MlbBoxScoreGamesServiceApi } from 'src/integration/mlb.game_box_score.service.api';
import { GamesBoxScoreApp } from 'src/app/gamesBoxScore.app';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MongooseModule.forFeature([
      { name: ScheduleGames.name, schema: ScheduleGamesSchema },
      { name: Game.name, schema: GameSchema },
    ]),
  ],
  providers: [
    CronService,
    MlbScheduleService,
    MlbScheduleGamesServiceApi,
    MlbBoxScoreGamesServiceApi,
    MlbSGamesBoxScoreService,
    ScheduleGamesApp,
    GamesBoxScoreApp,
    ScheduleService,
    GamesBoxScoreService,
  ],
  exports: [MlbScheduleService, MlbSGamesBoxScoreService],
})
export class CronModule {}
