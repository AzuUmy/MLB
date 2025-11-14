import { Field, ObjectType } from '@nestjs/graphql';
import { Metting } from './Metting.entity';

@ObjectType()
export class Reviews {
  @Field(() => Metting)
  home!: Metting;
  @Field(() => Metting)
  away!: Metting;
}
