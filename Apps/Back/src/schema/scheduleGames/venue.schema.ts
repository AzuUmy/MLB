import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Venue {
  @Prop()
  name!: string;

  @Prop()
  market!: string;

  @Prop()
  capacity!: string;

  @Prop()
  surface!: string;

  @Prop()
  address!: string;

  @Prop()
  city!: string;

  @Prop()
  state!: string;

  @Prop()
  zip!: string;

  @Prop()
  country!: string;

  @Prop()
  id!: string;

  @Prop()
  field_orientation!: string;

  @Prop()
  stadium_type!: string;

  @Prop()
  time_zone!: string;

  @Prop({ type: Object, required: false })
  location?: { lat?: string; lng?: string };
}

export type VenueDocument = Venue & Document;
export const VenueSchema = SchemaFactory.createForClass(Venue);
