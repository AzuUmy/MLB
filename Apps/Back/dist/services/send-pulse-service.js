"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPulseService = void 0;
const axios_1 = __importDefault(require("axios"));
const env_credentials_1 = require("../Security/env.credentials");
class sendPulseService {
    async getSendPulseToken() {
        const { data } = await axios_1.default.post(`${env_credentials_1.sendpulseUrl}`, {
            grant_type: env_credentials_1.sendPulseGrantType,
            client_id: env_credentials_1.sendPulseClientId,
            client_secret: env_credentials_1.sendPulseClientSecret,
        });
        return data.access_token;
    }
}
exports.sendPulseService = sendPulseService;
//# sourceMappingURL=send-pulse-service.js.map