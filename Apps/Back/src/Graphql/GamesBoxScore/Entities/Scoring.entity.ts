import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Scoring {
  @Field(() => Int, { nullable: true })
  number?: number | null;
  @Field(() => Int, { nullable: true })
  sequence?: number | null;
  @Field(() => Int, { nullable: true })
  runs?: number | null;
  @Field(() => Int, { nullable: true })
  hits?: number | null;
  @Field(() => Int, { nullable: true })
  errors?: number | null;
  @Field(() => String, { nullable: true })
  type?: string | null;
}
