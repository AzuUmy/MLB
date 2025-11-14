import { Field, ObjectType } from '@nestjs/graphql';
import { Metting } from './Metting.entity';

@ObjectType()
export class MoundVisits {
  @Field(() => Metting)
  home!: Metting;
  @Field(() => Metting) away!: Metting;
}
