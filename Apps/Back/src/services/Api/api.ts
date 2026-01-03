import dotenv from 'dotenv';
dotenv.config();

export const apiUrl = process.env.BASE_URL
export const token = process.env.token
export const locale = process.env.locale
export const format = process.env.format
export const firebaseAppId = process.env.firebaseAppId
export const firebaseApiKey = process.env.firebase_api_key
export const firebaseAuthDomain = process.env.firebase_auth_domain
export const firebaseProjectId = process.env.firebase_project_id
export const firebaseStorageBucket = process.env.firebase_storage_bucket
export const firebaseClientEmail = process.env.firebae_client_email
export const firebasePrivateKey = process.env.firebase_pirvate_key?.replace(/\\n/g, '\n');