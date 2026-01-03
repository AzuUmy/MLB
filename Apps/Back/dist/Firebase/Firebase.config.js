"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const app_1 = require("firebase-admin/app");
const auth_1 = require("firebase-admin/auth");
const api_1 = require("../services/Api/api");
const firebaseConfig = {
    apiKey: api_1.firebaseApiKey,
    authDomain: api_1.firebaseAuthDomain,
    projectId: api_1.firebaseProjectId,
    storageBucket: api_1.firebaseStorageBucket,
    appId: api_1.firebaseAppId,
};
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.auth = (0, auth_1.getAuth)(app);
//# sourceMappingURL=Firebase.config.js.map