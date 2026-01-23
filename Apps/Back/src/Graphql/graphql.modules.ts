import { Module } from '@nestjs/common';
import { ScheduleModule } from './ScheduleGames/schedule.modules';
import { TeamsModule } from './Teams/teams.modules';
import { gamesBoxScoreModules } from './GamesBoxScore/gamesBoxScore.modules';
import { AuthModule } from './Auth/auth.modules';
import { emailModule } from './Email/email.modules';

@Module({
  imports: [
    ScheduleModule,
    TeamsModule,
    gamesBoxScoreModules,
    AuthModule,
    emailModule,
  ],
  exports: [
    ScheduleModule,
    TeamsModule,
    gamesBoxScoreModules,
    AuthModule,
    emailModule,
  ],
})
export class GraphQLModules {}
