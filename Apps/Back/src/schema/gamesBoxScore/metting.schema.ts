import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Metting {
  @Prop()
  used!: number;
  @Prop()
  remaining!: number;
}

export const MettingSchema = SchemaFactory.createForClass(Metting);
export type MettingDocument = Metting & Document;
