import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Venue } from './venue.schema';
import type { Team } from './team.schema';
import { Broadcast } from 'src/Graphql/ScheduleGames/Entities/broadcast.entity';


@Schema()
export class Games {
  @Prop()
  id!: string;

  @Prop()
  status!: string;

  @Prop()
  coverage!: string;

  @Prop()
  game_number!: string;

  @Prop()
  day_night!: string;

  @Prop()
  scheduled!: string;

  @Prop()
  home_team!: string;

  @Prop()
  away_team!: string;

  @Prop()
  ps_round!: string;

  @Prop()
  ps_game!: string;

  @Prop()
  attendance?: string;

  @Prop()
  duration?: string;

  @Prop()
  double_header!: boolean;

  @Prop()
  entry_mode!: string;

  @Prop()
  reference!: string;

  @Prop({type: Object})
  venu!: Venue;

  @Prop({type: Object})
  home!: Team;

  @Prop({type: Object})
  away!: Team;

  @Prop({type: [Object]})
  broadcasts!: Broadcast[];
}

export type GamesDocument = Games & Document;
export const BroadcastSchema = SchemaFactory.createForClass(Games);
