import { Field, ObjectType } from '@nestjs/graphql';
import { Status } from './Status.entity';

@ObjectType()
export class Pitching {
  @Field(() => Status)
  win!: Status;
  @Field(() => Status)
  loss!: Status;
  @Field(() => [Status])
  hold!: Status[];
  @Field(() => [Status])
  blown_save!: Status[];
}
