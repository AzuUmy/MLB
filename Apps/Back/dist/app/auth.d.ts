import { Auth } from '@my-mlb/shared';
import { AuthService } from 'src/Graphql/Auth/auth.service';
export declare class AuthApp {
    private readonly authService;
    constructor(authService: AuthService);
    userAuthentication(email: string, password: string): Promise<Auth>;
}
