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
  @Field(() => Int, { nullable: true })
  win?: number | null;
  @Field(() => Int, { nullable: true })
  loss?: number | null;
  @Field(() => Float, { nullable: true })
  era?: number | null;
}
