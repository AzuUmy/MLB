import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Scoring {
  @Prop({ required: false })
  number?: number;
  @Prop({ required: false })
  sequence?: number;
  @Prop({ required: false })
  runs?: number;
  @Prop({ required: false })
  hits?: number;
  @Prop({ required: false })
  errors?: number;
  @Prop({ required: false })
  type?: string;
}
export const ScoringSchema = SchemaFactory.createForClass(Scoring);
export type ScoringDocument = Scoring & Document;
