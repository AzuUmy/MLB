"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPulseService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const redis_service_1 = require("../../redis/redis.service");
const env_credentials_1 = require("../../Security/env.credentials");
let sendPulseService = class sendPulseService {
    redisService;
    constructor(redisService) {
        this.redisService = redisService;
    }
    async onModuleInit() {
        const redis = this.redisService.getClient();
        common_1.Logger.log('SendPulse Service Initialized');
        await this.getSendPulseToken(redis);
    }
    async getSendPulseToken(redis) {
        common_1.Logger.log('Getting SendPulse Token');
        const { data } = await axios_1.default.post(`${env_credentials_1.sendpulseUrl}/oauth/access_token`, {
            grant_type: env_credentials_1.sendPulseGrantType,
            client_id: env_credentials_1.sendPulseClientId,
            client_secret: env_credentials_1.sendPulseClientSecret,
        });
        if (!data.access_token) {
            throw new Error('Failed to retrieve access token');
        }
        if (redis === undefined) {
            throw new Error('Redis client is undefined');
        }
        await this.insertSendPulseToken(data.access_token, redis);
    }
    async insertSendPulseToken(token, redis) {
        common_1.Logger.log('Inserting SendPulse Token into Redis');
        redis.set('sendPulseToken', token);
    }
    async getSendPulseTokenFromRedis() {
        const redis = this.redisService.getClient();
        const token = await redis.get('sendPulseToken');
        if (!token) {
            common_1.Logger.log('SendPulse Token not found in Redis, fetching new token');
            await this.getSendPulseToken(redis);
            const newToken = await redis.get('sendPulseToken');
            if (!newToken) {
                throw new Error('Failed to retrieve SendPulse token from Redis');
            }
            return newToken;
        }
        return token;
    }
    async sendEmail(to, subject, html, text) {
        try {
            await axios_1.default.post(`${env_credentials_1.sendpulseUrl}/smtp/emails`, {
                email: {
                    subject: `${subject}`,
                    html,
                    text: `${text}`,
                    from: {
                        name: 'My App',
                        email: 'carlos.pherbis223@gmail.com',
                    },
                    to: [{ name: 'Carlos', email: to }],
                },
            }, {
                headers: {
                    Authorization: `Bearer `,
                },
            });
        }
        catch (erro) {
            throw new Error('Error sending email, check credentials' + erro);
        }
        return 'sucessfully sent email';
    }
};
exports.sendPulseService = sendPulseService;
exports.sendPulseService = sendPulseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [redis_service_1.RedisService])
], sendPulseService);
//# sourceMappingURL=send-pulse.service.js.map