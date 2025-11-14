import { Resolver, Query, Args } from '@nestjs/graphql';
import { GamesBoxScoreApp } from 'src/app/gamesBoxScore.app';
import { Game } from './Entities/Game.entity';

@Resolver()
export class GamesBoxScoreResolver {
  constructor(private readonly gamesBoxScoreApp: GamesBoxScoreApp) {}

  @Query(() => Game, { name: 'gamesBoxScore' })
  async gamesBoxScore(
    @Args('id', { type: () => String }) id: string,
  ): Promise<any> {
    return this.gamesBoxScoreApp.getGamesBoxScore(id);
  }
}