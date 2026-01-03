import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  firebaseApiKey,
  firebaseAppId,
  firebaseAuthDomain,
  firebaseProjectId,
} from "../Security/env.credentials";

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  appId: firebaseAppId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
