import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Scoring {
  @Field(() => Int, { nullable: true })
  number?: number;
  @Field(() => Int, { nullable: true })
  sequence?: number;
  @Field(() => Int, { nullable: true })
  runs?: number;
  @Field(() => Int, { nullable: true })
  hits?: number;
  @Field(() => Int, { nullable: true })
  errors?: number;
  @Field({ nullable: true })
  type?: string;
}
