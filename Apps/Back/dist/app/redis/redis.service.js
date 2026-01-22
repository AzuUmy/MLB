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
var RedisService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const redis_1 = require("redis");
const config_1 = require("@nestjs/config");
const env_credentials_1 = require("../../Security/env.credentials");
let RedisService = RedisService_1 = class RedisService {
    configService;
    logger = new common_1.Logger(RedisService_1.name);
    client;
    constructor(configService) {
        this.configService = configService;
        this.client = (0, redis_1.createClient)({
            url: this.configService.get(String(env_credentials_1.redisHost)),
        });
        this.client.on('error', (err) => {
            common_1.Logger.error('Redis Client Error', err);
            this.logger.error(`Redis Client Error: ${err.message}`);
        });
    }
    async onModuleInit() {
        if (this.client.isOpen) {
            await this.client.connect();
            common_1.Logger.log('Connected to Redis');
            this.logger.log('Connected to Redis');
        }
    }
    async onModuleDestroy() {
        if (this.client.isOpen) {
            await this.client.quit();
            common_1.Logger.log('Disconnected from Redis');
            this.logger.log('Disconnected from Redis');
        }
    }
    getClient() {
        return this.client;
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = RedisService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], RedisService);
//# sourceMappingURL=redis.service.js.map