import { Logger } from '@nestjs/common';
import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import {
  firebaseClientEmail,
  firebasePrivateKey,
  firebaseProjectId,
} from 'src/services/Api/api';

Logger.log('[Firebase] Initializing Firebase Admin...');

initializeApp({
  credential: cert({
    projectId: firebaseProjectId,
    clientEmail: firebaseClientEmail,
    privateKey: firebasePrivateKey,
  }),
});

Logger.log('[Firebase] Firebase Admin initialized successfully');

export const adminAuth = getAuth();
export const adminDb = getFirestore();

Logger.log('[Firebase] Auth & Firestore ready');