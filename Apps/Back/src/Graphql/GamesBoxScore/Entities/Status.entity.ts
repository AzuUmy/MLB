import { Field, Int, ObjectType } from '@nestjs/graphql';

ObjectType();
export class Status {
  @Field()
  preferred_name!: string;
  @Field()
  first_name!: string;
  @Field()
  last_name!: string;
  @Field()
  jersey_number!: string;
  @Field()
  status!: string;
  @Field()
  position!: string;
  @Field()
  primary_position!: string;
  @Field()
  id!: string;
  @Field(() => Int)
  win!: number;
  @Field(() => Int)
  loss!: number;
  @Field(() => Int)
  save!: number;
  @Field(() => Int)
  hold!: number;
  @Field(() => Int)
  blown_save!: number;
  @Field()
  full_name!: string;
}
