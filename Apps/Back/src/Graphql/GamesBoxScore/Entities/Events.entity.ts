import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Runners } from './Runners.entity';

@ObjectType()
export class Events {
  @Field()
  hitter_id!: string;
  @Field()
  pitcher_id!: string;
  @Field(() => Int)
  inning!: number;
  @Field()
  inning_half!: string;
  @Field()
  type!: string;
  @Field()
  hitter_outcome!: string;
  @Field()
  id!: string;
  @Field(() => [Runners])
  runners!: Runners[];
}
