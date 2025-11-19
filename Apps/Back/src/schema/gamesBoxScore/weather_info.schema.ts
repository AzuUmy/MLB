import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Wind, WindSchema } from './wind.schema';

@Schema()
export class WeatherInfo {
  @Prop()
  temp_f!: number;
  @Prop()
  condition!: string;
  @Prop()
  humidity!: number;
  @Prop()
  dew_point_f!: number;
  @Prop()
  cloud_cover!: number;
  @Prop()
  obs_time!: string;
  @Prop({ type: WindSchema })
  wind!: Wind;
}
export const WeatherInfoSchema = SchemaFactory.createForClass(WeatherInfo);
export type WeatherInfoDocument = WeatherInfo & Document;
