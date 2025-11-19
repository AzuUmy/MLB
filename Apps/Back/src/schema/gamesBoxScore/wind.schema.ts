import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Wind {
  @Prop()
  speed_mph!: number;
  @Prop()
  direction!: string;
}
export const WindSchema = SchemaFactory.createForClass(Wind);
export type WindDocument = Wind & Document;
