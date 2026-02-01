import dotenv from 'dotenv';
dotenv.config();

export const apiUrl = process.env.BASE_URL;
export const token = process.env.TOKEN;
export const locale = process.env.LOCALE;
export const format = process.env.FORMAT;
export const firebaseAppId = process.env.FIREBASE_APP_ID;
export const firebaseProjectId = process.env.FIREBASE_PROJECT_ID;
export const firebaseStorageBucket = process.env.FIREBASE_STORAGE_BUCKET;
export const firebaseClientEmail = process.env.FIREBASE_CLIENT_EMAIL;
export const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(
  /\\n/g,
  '\n',
);
export const sendPulseGrantType = process.env.GRANT_TYPE;
export const sendPulseClientId = process.env.CLIENT_ID;
export const sendPulseClientSecret = process.env.CLIENT_SECRET;
export const sendpulseUrl = process.env.SEND_PULSE_URL;
