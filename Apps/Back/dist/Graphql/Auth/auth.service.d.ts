import { Auth, Email } from '@my-mlb/shared';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    GetUserEmail(email: string): Promise<Email>;
    GetUserAuth(email: string, password: string): Promise<Auth>;
}
