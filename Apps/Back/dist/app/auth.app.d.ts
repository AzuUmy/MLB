import { Email } from '@my-mlb/shared';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/Graphql/Auth/auth.service';
import { AuthValidation } from 'src/Graphql/Auth/Entities/auth.entity';
export declare class AuthApp {
    private readonly authService;
    private readonly jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    userEmail(email: string): Promise<Email>;
    userAuthentication(token: string): Promise<AuthValidation>;
}
