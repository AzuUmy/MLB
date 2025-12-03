import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Runners {
  @Field(() => Int)
  starting_base!: number;
  @Field()
  first_name!: string;
  @Field()
  last_name!: string;
  @Field()
  preferred_name!: string;
  @Field()
  jersey_number!: string;
  @Field()
  id!: string;
  @Field()
  full_name!: string;
  @Field(() => String, {nullable: true})
  suffix?: string | null
}
