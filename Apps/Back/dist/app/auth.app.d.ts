import { Email } from '@my-mlb/shared';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/Graphql/Auth/auth.service';
import { ActionResponse, AuthValidation } from 'src/Graphql/Auth/Entities/auth.entity';
import { EmailService } from 'src/Graphql/Email/email.service';
export declare class AuthApp {
    private readonly authService;
    private readonly emailService;
    private readonly jwtService;
    constructor(authService: AuthService, emailService: EmailService, jwtService: JwtService);
    userEmail(email: string): Promise<Email>;
    userAuthentication(token: string): Promise<AuthValidation>;
    generateUserCode(to: string): Promise<ActionResponse>;
}
