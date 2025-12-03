import { ObjectType, Field, Int } from '@nestjs/graphql';
import { MoundVisits } from './Mound_visit.entity';
import { Reviews } from './Reviews.entity';
import { TimeZones } from './Time_zones.entity';
import { Venue } from 'src/Graphql/ScheduleGames/Entities/venu.entity';
import { Broadcast } from 'src/Graphql/ScheduleGames/Entities/broadcast.entity';
import { Weather } from './Weather.entity';
import { Final } from './Final.entity';
import { TeamStatus } from './Team_status.entity';
import { Pitching } from './Pitching.entity';

@ObjectType()
export class Game {
  @Field()
  id!: string;
  @Field()
  status!: string;
  @Field()
  coverage!: string;
  @Field(() => Int)
  game_number!: number;
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
  @Field(() => Int, { nullable: true })
  attendance?: number | null ;
  @Field()
  duration!: string;
  @Field(() => String, { nullable: true })
  season_id?: string | null;
  @Field(() => String,{ nullable: true })
  season_type?: string | null;
  @Field(() => Int, { nullable: true })
  season_year?: number | null;
  @Field()
  double_header!: boolean;
  @Field()
  entry_mode!: string;
  @Field()
  reference!: string;
  @Field(() => MoundVisits, { nullable: true })
  mound_visits?: MoundVisits | null;
  @Field(() => Reviews, { nullable: true })
  reviews?: Reviews | null;
  @Field(() => TimeZones, { nullable: true })
  time_zones?: TimeZones | null;
  @Field(() => Venue, { nullable: true })
  venue?: Venue | null;
  @Field(() => [Broadcast], { nullable: 'itemsAndList' })
  broadcasts?: (Broadcast | null)[] | null;
  @Field(() => Weather, { nullable: true })
  weather?: Weather | null;
  @Field(() => Final, { nullable: true })
  final?: Final | null;
  @Field(() => TeamStatus, { nullable: true })
  home?: TeamStatus | null;
  @Field(() => TeamStatus, { nullable: true })
  away?: TeamStatus | null;
  @Field(() => Pitching, { nullable: true })
  pitching?: Pitching | null;
}
