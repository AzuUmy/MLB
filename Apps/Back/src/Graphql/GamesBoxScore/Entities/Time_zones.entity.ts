import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TimeZones {
  @Field()
  venue!: string;
  @Field()
  home!: string;
  @Field()
  away!: string;
}
