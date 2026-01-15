import { UnauthorizedException } from '@nestjs/common';
import { Auth, AuthValidation, Email, Token } from './Entities/auth.entity';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { AuthApp } from 'src/app/auth.app';
import { Request } from 'express';

@Resolver()
export class AuthResolver {
  constructor(private readonly authApp: AuthApp) {}

  @Query(() => AuthValidation)
  async Auth(@Context() ctx: { req: Request }) {
    const authHeader = ctx.req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing Authorization header');
    }

    const token = authHeader.replace('Bearer ', '');

    return this.authApp.userAuthentication(token);
  }

  @Query(() => Email)
  async EmailCheck(@Args('email', { type: () => String }) email: string) {
    return this.authApp.userEmail(email);
  }
}
