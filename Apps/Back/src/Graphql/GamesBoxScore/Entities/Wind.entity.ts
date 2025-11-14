import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Wind {
  @Field(() => Float)
  speed_mph!: number;
  @Field()
  direction!: string;
}
