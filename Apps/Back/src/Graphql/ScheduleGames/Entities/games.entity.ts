import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Venue } from './venu.entity';
import { Team } from './team.entity';
import { Broadcast } from './broadcast.entity';

@ObjectType()
export class Games {
  @Field(() => ID)
  id!: string;

  @Field()
  status!: string;

  @Field()
  coverage!: string;

  @Field()
  game_number!: string;

  @Field()
  day_night!: string;

  @Field()
  scheduled!: string;

  @Field()
  home_team!: string;

  @Field()
  away_team!: string;

  @Field()
  ps_round!: string;

  @Field()
  ps_game!: string;

  @Field(() => String, { nullable: true })
  attendance?: string;

  @Field(() => String, {nullable: true})
  duration?: string;

  @Field()
  double_header!: boolean;

  @Field()
  entry_mode!: string;

  @Field()
  reference!: string;

  @Field(() => Venue)
  venue!: Venue;

  @Field(() => Team)
  home!: Team;

  @Field(() => Team)
  away!: Team;

  @Field(() => [Broadcast])
  broadcasts!: Broadcast[];
}