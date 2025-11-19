import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class FinalInfo {
  @Prop()
  inning!: number;
  @Prop()
  inning_half!: string;
}
export const FinalInfoSchema = SchemaFactory.createForClass(FinalInfo);
export type FinalInfoDocument = FinalInfo & Document;
