import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Metting, MettingSchema } from './metting.schema';

@Schema()
export class MoundVisits {
  @Prop({ type: MettingSchema })
  home!: Metting;
  @Prop({ type: MettingSchema })
  away!: Metting;
}
export const MoundVisitsSchema = SchemaFactory.createForClass(MoundVisits);
export type MoundVisitsDocument = MoundVisits & Document;
