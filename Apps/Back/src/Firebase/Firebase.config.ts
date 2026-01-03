import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { firebaseApiKey, firebaseAuthDomain, firebaseProjectId, firebaseStorageBucket, firebaseAppId } from "src/services/Api/api";

const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: firebaseAuthDomain,
    projectId: firebaseProjectId,
    storageBucket: firebaseStorageBucket,
    appId: firebaseAppId,
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);