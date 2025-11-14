import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Wind } from './Wind.entity';

@ObjectType()
export class WeatherInfo {
  @Field(() => Float)
  temp_f!: number;
  @Field()
  condition!: string;
  @Field(() => Int)
  humidity!: number;
  @Field(() => Float)
  dew_point_f!: number;
  @Field(() => Int)
  cloud_cover!: number;
  @Field()
  obs_time!: string;
  @Field(() => Wind)
  wind!: Wind;
}
