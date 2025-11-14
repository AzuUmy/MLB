import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Final {
  @Field(() => Int)
  inning!: number;
  @Field()
  inning_half!: string;
}
