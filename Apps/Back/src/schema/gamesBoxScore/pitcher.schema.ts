import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Pitcher {
  @Prop() preferred_name!: string;
  @Prop() first_name!: string;
  @Prop() last_name!: string;
  @Prop() id!: string;
  @Prop() full_name!: string;
  @Prop({ required: false }) jersey_number?: string;
  @Prop() win!: number;
  @Prop() loss!: number;
  @Prop() era!: number;
}
export const PitcherSchema = SchemaFactory.createForClass(Pitcher);
export type PitcherDocument = Pitcher & Document;
