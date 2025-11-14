import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { MoundVisits } from './Mound_visit.entity';
import { Reviews } from './Reviews.entity';
import { TimeZones } from './Time_zones.entity';
import { Venue } from 'src/Graphql/ScheduleGames/Entities/venu.entity';
import { Broadcast } from 'src/Graphql/ScheduleGames/Entities/broadcast.entity';
import { Weather } from './Weather.entity';
import { Final } from './Final.entity';
import { TeamStatus } from './Team_status.entity';

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
  attendance?: number;
  @Field()
  duration!: string;
  @Field()
  season_id?: string;
  @Field()
  season_type?: string;
  @Field(() => Int, { nullable: true })
  season_year?: number;
  @Field()
  double_header!: boolean;
  @Field()
  entry_mode!: string;
  @Field()
  reference!: string;
  @Field(() => MoundVisits, { nullable: true })
  mound_visits?: MoundVisits;
  @Field(() => Reviews, { nullable: true })
  reviews?: Reviews;
  @Field(() => TimeZones, { nullable: true })
  time_zones?: TimeZones;
  @Field(() => Venue, { nullable: true })
  venue?: Venue;
  @Field(() => [Broadcast], { nullable: 'itemsAndList' })
  broadcasts?: Broadcast[];
  @Field(() => Weather, { nullable: true })
  weather?: Weather;
  @Field(() => Final, { nullable: true })
  final?: Final;
  @Field(() => TeamStatus, { nullable: true })
  home?: TeamStatus;
  @Field(() => TeamStatus, { nullable: true })
  away?: TeamStatus;
}
