import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { adminAuth, adminDb } from './Firebase.admin.config';
import { auth } from './Firebase.config';

@Injectable()
export class FirebaseAdminService implements OnModuleInit {
  private readonly logger = new Logger(FirebaseAdminService.name);

  onModuleInit() {
    this.logger.log('FirebaseAdminService loaded and ready');
  }

  async verifyToken(idToken: string) {
    return adminAuth.verifyIdToken(idToken);
  }

  async createUser(email: string, password: string) {
    return adminAuth.createUser({ email, password });
  }

  async getUser(uid: string) {
    return adminAuth.getUser(uid);
  }
}


