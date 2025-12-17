import { Email } from '@my-mlb/shared';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/Graphql/Auth/auth.service';
import { Token } from 'src/Graphql/Auth/Entities/auth.entity';

@Injectable()
export class AuthApp {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  async userEmail(email: string): Promise<Email> {
    const userEmail = await this.authService.GetUserEmail(email);

    if (!userEmail) {
      throw new UnauthorizedException('Email not founded');
    }

    return userEmail;
  }

  async userAuthentication(
    email: string,
    password: string,
  ): Promise<Token | string> {
    const userAuth = await this.authService.GetUserAuth(email, password);

    if (!userAuth) {
      throw new UnauthorizedException('User not found');
    }

    const payload = {
      email: userAuth.email,
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return { accessToken };
  }
}
