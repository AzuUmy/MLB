import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Scoring {
  @Field(() => Int)
  number!: number;
  @Field(() => Int)
  sequence!: number;
  @Field(() => Int)
  runs!: number;
  @Field(() => Int)
  hits!: number;
  @Field(() => Int)
  errors!: number;
  @Field()
  type!: string;
}
