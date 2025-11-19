import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Scoring {
  @Prop()
  number!: number;
  @Prop()
  sequence!: number;
  @Prop()
  runs!: number;
  @Prop()
  hits!: number;
  @Prop()
  errors!: number;
  @Prop()
  type!: string;
}
export const ScoringSchema = SchemaFactory.createForClass(Scoring);
export type ScoringDocument = Scoring & Document;
