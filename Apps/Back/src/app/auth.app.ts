import { Email } from '@my-mlb/shared';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/Graphql/Auth/auth.service';
import {
  Auth,
  AuthValidation,
  Token,
} from 'src/Graphql/Auth/Entities/auth.entity';
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

  async userAuthentication(token: string): Promise<AuthValidation> {
    let authenticationResult = false;

    const validateToken = await adminAuth.verifyIdToken(token).catch(() => {
      authenticationResult = false;
      throw new UnauthorizedException('Invalid token');
    });

    if (!validateToken) {
      authenticationResult = false;
      throw new UnauthorizedException('Error validating token');
    }

    return { isvalid: (authenticationResult = true) };
  }
}
