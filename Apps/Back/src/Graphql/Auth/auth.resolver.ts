import { Auth, Email, Token } from './Entities/auth.entity';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthApp } from 'src/app/auth.app';

@Resolver()
export class AuthResolver {
  constructor(private readonly authApp: AuthApp) {}

  @Query(() => Token)
  async Auth(
    @Args('token', { type: () => String }) token: string,
    @Args('email', { type: () => String }) email: string,
    @Args('lastLoginAt', { type: () => String }) lastLoginAt: string,
  ) {
    return this.authApp.userAuthentication(token, email, lastLoginAt);
  }

  @Query(() => Email)
  async EmailCheck(@Args('email', { type: () => String }) email: string) {
    return this.authApp.userEmail(email);
  }
}
