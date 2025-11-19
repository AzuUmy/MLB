import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Runners, RunnersSchema } from "./runners.schema";

@Schema()
export class Events {
  @Prop() hitter_id!: string;
  @Prop() pitcher_id!: string;
  @Prop() inning!: number;
  @Prop() inning_half!: string;
  @Prop() type!: string;
  @Prop() hitter_outcome!: string;
  @Prop() id!: string;
  @Prop({ type: [RunnersSchema], default: [] }) runners!: Runners[];
}
export const EventsSchema = SchemaFactory.createForClass(Events);
export type EventsDocument = Events & Document;