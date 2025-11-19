import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Pitcher, PitcherSchema } from "./pitcher.schema";
import { Scoring, ScoringSchema } from "./scoring.schema";
import { Events, EventsSchema } from "./events.schema";

@Schema()
export class TeamStatus {
  @Prop() name!: string;
  @Prop() market!: string;
  @Prop() abbr!: string;
  @Prop() id!: string;
  @Prop() runs!: number;
  @Prop() hits!: number;
  @Prop() errors!: number;
  @Prop() win!: number;
  @Prop() loss!: number;
  @Prop({ type: PitcherSchema, required: false }) probable_pitcher?: Pitcher;
  @Prop({ type: PitcherSchema, required: false }) starting_pitcher?: Pitcher;
  @Prop({ type: [ScoringSchema], default: [] }) scoring!: Scoring[];
  @Prop({ type: [EventsSchema], default: [] }) events!: Events[];
}
export const TeamStatusSchema = SchemaFactory.createForClass(TeamStatus);
export type TeamStatusDocument = TeamStatus & Document;