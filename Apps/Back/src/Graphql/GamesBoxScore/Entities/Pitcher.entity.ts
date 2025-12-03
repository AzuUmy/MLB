import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pitcher {
  @Field()
  preferred_name!: string;
  @Field()
  first_name!: string;
  @Field()
  last_name!: string;
  @Field()
  id!: string;
  @Field()
  full_name!: string;
  @Field(() => Int)
  win?: number;
  @Field(() => Int)
  loss?: number;
  @Field(() => Float)
  era?: number;
}
