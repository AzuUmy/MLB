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
  @Field(() => Int)
  attendance!: number;
  @Field()
  duration!: string;
  @Field()
  season_id!: string;
  @Field()
  season_type!: string;
  @Field(() => Int)
  season_year!: number;
  @Field()
  double_header!: boolean;
  @Field()
  entry_mode!: string;
  @Field()
  reference!: string;
  @Field(() => MoundVisits)
  mound_visits?: MoundVisits;
  @Field(() => Reviews)
  reviews?: Reviews;
  @Field(() => TimeZones)
  time_zones?: TimeZones;
  @Field(() => Venue)
  venue?: Venue;
  @Field(() => [Broadcast])
  broadcasts?: Broadcast[];
  @Field(() => Weather)
  weather?: Weather;
  @Field(() => Final)
  final?: Final;
  @Field(() => TeamStatus)
  home?: TeamStatus;
  @Field(() => TeamStatus)
  away?: TeamStatus;
  @Field(() => Pitching)
  pitching?: Pitching;
}
