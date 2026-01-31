import dotenv from 'dotenv';
dotenv.config();

export const apiUrl = process.env.BASE_URL;
export const token = process.env.token;
export const locale = process.env.locale;
export const format = process.env.format;
export const firebaseAppId = process.env.firebaseAppId;
export const firebaseProjectId = process.env.firebase_project_id;
export const firebaseStorageBucket = process.env.firebase_storage_bucket;
export const firebaseClientEmail = process.env.firebae_client_email;
export const firebasePrivateKey = process.env.firebase_pirvate_key?.replace(
  /\\n/g,
  '\n',
);
export const sendPulseGrantType = process.env.grant_type;
export const sendPulseClientId = process.env.client_id;
export const sendPulseClientSecret = process.env.client_secret;
export const sendpulseUrl = process.env.sendPulseUrl;
export const DATABASE_URL = process.env.DATABASE_URL;
