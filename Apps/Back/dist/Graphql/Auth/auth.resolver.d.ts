import { Token } from './Entities/auth.entity';
import { AuthApp } from 'src/app/auth.app';
export declare class AuthResolver {
    private readonly authApp;
    constructor(authApp: AuthApp);
    Auth(email: string, password: string): Promise<string | Token>;
}
