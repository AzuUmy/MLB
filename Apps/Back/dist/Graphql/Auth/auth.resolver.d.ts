import { Token } from './Entities/auth.entity';
import { AuthApp } from 'src/app/auth.app';
import { Request } from 'express';
export declare class AuthResolver {
    private readonly authApp;
    constructor(authApp: AuthApp);
    Auth(ctx: {
        req: Request;
    }, email: string, lastLoginAt: string): Promise<string | Token>;
    EmailCheck(email: string): Promise<import("@my-mlb/shared").Email>;
}
