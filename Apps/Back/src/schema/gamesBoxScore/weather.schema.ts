import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { WeatherInfo, WeatherInfoSchema } from './weather_info.schema';

@Schema()
export class Weather {
  @Prop({ type: WeatherInfoSchema })
  forecast!: WeatherInfo;
  @Prop({ type: WeatherInfoSchema })
  current_conditions!: WeatherInfo;
}
export const WeatherSchema = SchemaFactory.createForClass(Weather);
export type WeatherDocument = Weather & Document;
