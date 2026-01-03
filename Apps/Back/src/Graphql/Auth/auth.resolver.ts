import { UnauthorizedException } from '@nestjs/common';
import { Auth, Email, Token } from './Entities/auth.entity';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { AuthApp } from 'src/app/auth.app';
import { Request } from 'express';

@Resolver()
export class AuthResolver {
  constructor(private readonly authApp: AuthApp) {}

  @Query(() => Token)
  async Auth(
    @Context() ctx: { req: Request },
    @Args('email', { type: () => String }) email: string,
    @Args('lastLoginAt', { type: () => String }) lastLoginAt: string,
  ) {
    const authHeader = ctx.req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing Authorization header');
    }

    const token = authHeader.replace('Bearer ', '');

    return this.authApp.userAuthentication(token, email, lastLoginAt);
  }

  @Query(() => Email)
  async EmailCheck(@Args('email', { type: () => String }) email: string) {
    return this.authApp.userEmail(email);
  }
}
