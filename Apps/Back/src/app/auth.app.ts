import { Email } from '@my-mlb/shared';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/Graphql/Auth/auth.service';
import { Token } from 'src/Graphql/Auth/Entities/auth.entity';
import { adminAuth } from 'src/Firebase/Firebase.admin.config';
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
    token: string,
    email: string,
    lastLoginAt: string,
  ): Promise<Token | string> {
    const payload = {
      token: token,
      email: email,
    };

    const validateToken = await adminAuth.verifyIdToken(token).catch(() => {
      throw new UnauthorizedException('Invalid token');
    });

    if (!validateToken) {
      throw new UnauthorizedException('Error validating token');
    }

    const accessToken = await this.jwtService.signAsync(payload);

    return { accessToken };
  }
}
