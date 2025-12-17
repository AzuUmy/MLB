import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/Graphql/Auth/auth.service';
import { Token } from 'src/Graphql/Auth/Entities/auth.entity';

@Injectable()
export class AuthApp {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  async userAuthentication(
    email: string,
    password: string,
  ): Promise<Token | string> {
    const userAuth = await this.authService.GetUserAuth(email, password);

    if (!userAuth) {
      return 'User not found';
    }

    const payload = {
      email: userAuth.email,
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return { accessToken };
  }
}
