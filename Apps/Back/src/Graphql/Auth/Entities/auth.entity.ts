import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Email {
  @Field({ nullable: true })
  email?: string;
}

@ObjectType()
export class Auth {
  @Field(() => String, { nullable: false })
  token!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => String, { nullable: false })
  lastLoginAt!: string;
}

@ObjectType()
export class Token {
  @Field()
  accessToken!: string;
}
