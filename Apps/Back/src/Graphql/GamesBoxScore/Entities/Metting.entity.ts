import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Metting {
  @Field(() => Int)
  used!: number;
  @Field(() => Int)
  remaining!: number;
}
