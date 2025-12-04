import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { adminAuth, adminDb } from './Firebase.admin.config';

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

  async setDocument(collection: string, doc: string, data: any) {
    return adminDb.collection(collection).doc(doc).set(data);
  }

  async getDocument(collection: string, doc: string) {
    const result = await adminDb.collection(collection).doc(doc).get();
    return result.data();
  }
}