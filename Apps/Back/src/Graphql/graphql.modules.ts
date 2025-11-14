import { Module } from '@nestjs/common';
import { ScheduleModule } from './ScheduleGames/schedule.modules';
import { TeamsModule } from './Teams/teams.modules';
import { gamesBoxScoreModules } from './GamesBoxScore/gamesBoxScore.modules';

@Module({
  imports: [ScheduleModule, TeamsModule, gamesBoxScoreModules],
  exports: [ScheduleModule, TeamsModule, gamesBoxScoreModules],
})
export class GraphQLModules {}
