import { OnModuleInit } from '@nestjs/common';
export declare class FirebaseAdminService implements OnModuleInit {
    private readonly logger;
    onModuleInit(): void;
    verifyToken(idToken: string): Promise<import("firebase-admin/auth").DecodedIdToken>;
    createUser(email: string, password: string): Promise<import("firebase-admin/auth").UserRecord>;
    getUser(uid: string): Promise<import("firebase-admin/auth").UserRecord>;
}
