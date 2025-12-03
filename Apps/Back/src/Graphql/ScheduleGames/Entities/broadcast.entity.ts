// graphql/entities/broadcast.entity.ts
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Broadcast {
  @Field()
  network!: string;

  @Field()
  type!: string;

  @Field()
  locale!: string;

  @Field(() => String, { nullable: true })
  channel?: string | null;
}