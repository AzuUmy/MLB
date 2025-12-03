import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Scoring } from './Scoring.entity';
import { Events } from './Events.entity';
import { Pitcher } from './Pitcher.entity';

@ObjectType()
export class TeamStatus {
  @Field()
  name!: string;
  @Field()
  market!: string;
  @Field()
  abbr!: string;
  @Field()
  id!: string;
  @Field(() => Int)
  runs!: number;
  @Field(() => Int)
  hits!: number;
  @Field(() => Int)
  errors!: number;
  @Field(() => Int)
  win!: number;
  @Field(() => Int)
  loss!: number;
  @Field(() => Pitcher, { nullable: true })
  probable_pitcher?: Pitcher | null;
  @Field(() => Pitcher, { nullable: true })
  starting_pitcher?: Pitcher | null;
  @Field(() => [Scoring])
  scoring!: Scoring[];
  @Field(() => [Events])
  events!: Events[];
}
