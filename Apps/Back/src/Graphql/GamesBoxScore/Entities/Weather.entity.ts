import { Field, ObjectType } from '@nestjs/graphql';
import { WeatherInfo } from './Weather_info.entity';

@ObjectType()
export class Weather {
  @Field(() => WeatherInfo)
  forecast!: WeatherInfo;
  @Field(() => WeatherInfo)
  current_conditions!: WeatherInfo;
}
