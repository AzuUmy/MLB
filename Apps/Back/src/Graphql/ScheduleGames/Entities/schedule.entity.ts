import { ObjectType, Field } from '@nestjs/graphql';
import { League } from './legue.entity';
import { Games } from './games.entity';

@ObjectType()
export class ScheduleGames {
  @Field(() => League, { nullable: true })
  league!: League;

  @Field({ nullable: true })
  date?: string;

  @Field(() => [Games], { nullable: true })
  games!: Games[];

  @Field({ nullable: true })
  _comment?: string;

  @Field(() => [ScheduleGamesSeries], { nullable: true })
  seriesGroups?: ScheduleGamesSeries[];
}

@ObjectType()
export class ScheduleGamesSeries {
  @Field()
  series!: string;

  @Field(() => [Games])
  games!: Games[];
}
