// graphql/entities/venue.entity.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Location } from './location.entity';

@ObjectType()
export class Venue {
  @Field()
  name!: string;

  @Field()
  market!: string;

  @Field()
  capacity!: string;

  @Field()
  surface!: string;

  @Field()
  address!: string;

  @Field()
  city!: string;

  @Field()
  state!: string;

  @Field()
  zip!: string;

  @Field()
  country!: string;

  @Field(() => ID)
  id!: string;

  @Field()
  field_orientation!: string;

  @Field()
  stadium_type!: string;

  @Field()
  time_zone!: string;

  @Field(() => Location, { nullable: true })
  location?: Location | null;
}
