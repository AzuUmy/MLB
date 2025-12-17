import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Email {
  @Field({ nullable: true })
  email?: string;
}

@ObjectType()
export class Password {
  @Field({ nullable: true })
  password?: string;
}

@ObjectType()
export class Auth {
  @Field(() => Email, { nullable: true })
  email?: Email;

  @Field(() => Password, { nullable: true })
  password?: Password;
}

@ObjectType()
export class Token {
  @Field()
  accessToken!: string;
}
