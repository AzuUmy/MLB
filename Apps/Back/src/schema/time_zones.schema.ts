import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class TimeZones {
  @Prop()
  venue!: string;
  @Prop()
  home!: string;
  @Prop()
  away!: string;
}

export const TimeZonesSchema = SchemaFactory.createForClass(TimeZones);
export type TimeZonesDocument = TimeZones & Document;
