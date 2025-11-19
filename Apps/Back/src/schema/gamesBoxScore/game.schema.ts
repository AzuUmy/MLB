import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { MoundVisits, MoundVisitsSchema } from "./mound_visits.schema";
import { Reviews, ReviewsSchema } from "./reviews.schema";
import { TimeZones, TimeZonesSchema } from "../time_zones.schema";
import { Weather, WeatherSchema } from "./weather.schema";
import { FinalInfo, FinalInfoSchema } from "./final_info.schema";
import { TeamStatus, TeamStatusSchema } from "./teams_status.schema";
import {Venue, VenueSchema} from "../scheduleGames/venue.schema"
import {Broadcast, BroadcastSchema} from "../scheduleGames/broadcast.schema"
import { Pitching, PitchingSchema } from "./pitching.schema";

@Schema({ collection: 'gamesboxscore' })
export class Game {
  @Prop() id!: string;
  @Prop() status!: string;
  @Prop() coverage!: string;
  @Prop() game_number!: number;
  @Prop() day_night!: string;
  @Prop() scheduled!: string;
  @Prop() home_team!: string;
  @Prop() away_team!: string;
  @Prop() ps_round!: string;
  @Prop() ps_game!: string;
  @Prop() attendance!: number;
  @Prop() duration!: string;
  @Prop() season_id!: string;
  @Prop() season_type!: string;
  @Prop() season_year!: number;
  @Prop() double_header!: boolean;
  @Prop() entry_mode!: string;
  @Prop() reference!: string;
  @Prop({ type: MoundVisitsSchema, required: false }) mound_visits?: MoundVisits;
  @Prop({ type: ReviewsSchema, required: false }) reviews?: Reviews;
  @Prop({ type: TimeZonesSchema, required: false }) time_zones?: TimeZones;
  @Prop({ type: VenueSchema, required: false }) venue?: Venue;
  @Prop({ type: [BroadcastSchema], default: [] }) broadcasts!: Broadcast[];
  @Prop({ type: WeatherSchema, required: false }) weather?: Weather;
  @Prop({ type: FinalInfoSchema, required: false }) final?: FinalInfo;
  @Prop({ type: TeamStatusSchema, required: false }) home?: TeamStatus;
  @Prop({ type: TeamStatusSchema, required: false }) away?: TeamStatus;
  @Prop({type: PitchingSchema, required: false}) pitching?: Pitching
}
export const GameSchema = SchemaFactory.createForClass(Game);
export type GameDocument = Game & Document;