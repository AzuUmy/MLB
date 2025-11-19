import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Status {
  @Prop()
  preferred_name!: string;
  @Prop()
  first_name!: string;
  @Prop()
  last_name!: string;
  @Prop()
  jersey_number!: string;
  @Prop()
  status!: string;
  @Prop()
  position!: string;
  @Prop()
  primary_position!: string;
  @Prop()
  id!: string;
  @Prop()
  win!: number;
  @Prop()
  loss!: number;
  @Prop()
  save!: number;
  @Prop()
  hold!: number;
  @Prop()
  blown_save!: number;
  @Prop()
  full_name!: string;
}
export const StatusSchema = SchemaFactory.createForClass(Status);
export type StatusDocument = Status & Document;
