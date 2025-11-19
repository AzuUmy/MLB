import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Status, StatusSchema } from "./status.schema";

@Schema()
export class Pitching {
  @Prop({ type: StatusSchema }) win!: Status;
  @Prop({ type: StatusSchema }) loss!: Status;
  @Prop({ type: [StatusSchema], default: [] }) hold!: Status[];
  @Prop({ type: [StatusSchema], default: [] }) blown_save!: Status[];
}
export const PitchingSchema = SchemaFactory.createForClass(Pitching);
export type PitchingDocument = Pitching & Document;