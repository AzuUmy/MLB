import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Runners {
  @Prop() starting_base!: number;
  @Prop() first_name!: string;
  @Prop() last_name!: string;
  @Prop() preferred_name!: string;
  @Prop() jersey_number!: string;
  @Prop() id!: string;
  @Prop() full_name!: string;
  @Prop({required: false}) suffix?: string
}
export const RunnersSchema = SchemaFactory.createForClass(Runners);
export type RunnersDocument = Runners & Document;
