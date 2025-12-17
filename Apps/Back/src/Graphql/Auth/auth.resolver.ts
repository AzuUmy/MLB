import { Auth, Email, Token } from './Entities/auth.entity';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthApp } from 'src/app/auth.app';

@Resolver()
export class AuthResolver {
  constructor(private readonly authApp: AuthApp) {}

  @Query(() => Token)
  async Auth(
    @Args('email', { type: () => String }) email: string,
    @Args('password', { type: () => String }) password: string,
  ) {
    return this.authApp.userAuthentication(email, password);
  }

  @Query(() => Email)
  async EmailCheck(@Args('email', { type: () => String }) email: string) {
    return this.authApp.userEmail(email);
  }
}
