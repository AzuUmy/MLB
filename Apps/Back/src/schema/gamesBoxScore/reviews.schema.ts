import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Metting, MettingSchema } from './metting.schema';

@Schema()
export class Reviews {
  @Prop({ type: MettingSchema })
  home!: Metting;
  @Prop({ type: MettingSchema })
  away!: Metting;
}
export const ReviewsSchema = SchemaFactory.createForClass(Reviews);
export type ReviewsDocument = Reviews & Document;
