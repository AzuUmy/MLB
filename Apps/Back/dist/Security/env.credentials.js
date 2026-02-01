"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendpulseUrl = exports.sendPulseClientSecret = exports.sendPulseClientId = exports.sendPulseGrantType = exports.firebasePrivateKey = exports.firebaseClientEmail = exports.firebaseStorageBucket = exports.firebaseProjectId = exports.firebaseAppId = exports.format = exports.locale = exports.token = exports.apiUrl = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.apiUrl = process.env.BASE_URL;
exports.token = process.env.TOKEN;
exports.locale = process.env.LOCALE;
exports.format = process.env.FORMAT;
exports.firebaseAppId = process.env.FIREBASE_APP_ID;
exports.firebaseProjectId = process.env.FIREBASE_PROJECT_ID;
exports.firebaseStorageBucket = process.env.FIREBASE_STORAGE_BUCKET;
exports.firebaseClientEmail = process.env.FIREBASE_CLIENT_EMAIL;
exports.firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
exports.sendPulseGrantType = process.env.GRANT_TYPE;
exports.sendPulseClientId = process.env.CLIENT_ID;
exports.sendPulseClientSecret = process.env.CLIENT_SECRET;
exports.sendpulseUrl = process.env.SEND_PULSE_URL;
//# sourceMappingURL=env.credentials.js.map