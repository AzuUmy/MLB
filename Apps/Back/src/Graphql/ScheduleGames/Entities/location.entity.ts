import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Location {
  @Field(() => String, { nullable: true })
  lat?: string | null;

  @Field(() => String, { nullable: true })
  lng?: string | null;
}