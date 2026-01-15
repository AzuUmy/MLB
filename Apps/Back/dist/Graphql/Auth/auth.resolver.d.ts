import { AuthValidation } from './Entities/auth.entity';
import { AuthApp } from 'src/app/auth.app';
import { Request } from 'express';
export declare class AuthResolver {
    private readonly authApp;
    constructor(authApp: AuthApp);
    Auth(ctx: {
        req: Request;
    }): Promise<AuthValidation>;
    EmailCheck(email: string): Promise<import("@my-mlb/shared").Email>;
}
