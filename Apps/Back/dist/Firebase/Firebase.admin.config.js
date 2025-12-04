"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminDb = exports.adminAuth = void 0;
const common_1 = require("@nestjs/common");
const app_1 = require("firebase-admin/app");
const auth_1 = require("firebase-admin/auth");
const firestore_1 = require("firebase-admin/firestore");
const api_1 = require("../services/Api/api");
common_1.Logger.log('[Firebase] Initializing Firebase Admin...');
(0, app_1.initializeApp)({
    credential: (0, app_1.cert)({
        projectId: api_1.firebaseProjectId,
        clientEmail: api_1.firebaseClientEmail,
        privateKey: api_1.firebasePrivateKey,
    }),
});
common_1.Logger.log('[Firebase] Firebase Admin initialized successfully');
exports.adminAuth = (0, auth_1.getAuth)();
exports.adminDb = (0, firestore_1.getFirestore)();
common_1.Logger.log('[Firebase] Auth & Firestore ready');
//# sourceMappingURL=Firebase.admin.config.js.map