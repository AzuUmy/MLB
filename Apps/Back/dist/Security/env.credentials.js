"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisHost = exports.sendpulseUrl = exports.sendPulseClientSecret = exports.sendPulseClientId = exports.sendPulseGrantType = exports.firebasePrivateKey = exports.firebaseClientEmail = exports.firebaseStorageBucket = exports.firebaseProjectId = exports.firebaseAppId = exports.format = exports.locale = exports.token = exports.apiUrl = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.apiUrl = process.env.BASE_URL;
exports.token = process.env.token;
exports.locale = process.env.locale;
exports.format = process.env.format;
exports.firebaseAppId = process.env.firebaseAppId;
exports.firebaseProjectId = process.env.firebase_project_id;
exports.firebaseStorageBucket = process.env.firebase_storage_bucket;
exports.firebaseClientEmail = process.env.firebae_client_email;
exports.firebasePrivateKey = process.env.firebase_pirvate_key?.replace(/\\n/g, '\n');
exports.sendPulseGrantType = process.env.grant_type;
exports.sendPulseClientId = process.env.client_id;
exports.sendPulseClientSecret = process.env.client_secret;
exports.sendpulseUrl = process.env.sendPulseUrl;
exports.redisHost = process.env.REDIS_URL;
//# sourceMappingURL=env.credentials.js.map