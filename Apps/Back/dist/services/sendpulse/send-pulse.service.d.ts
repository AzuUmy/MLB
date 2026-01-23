import { OnModuleInit } from '@nestjs/common';
import { RedisClientType } from 'redis';
import { RedisService } from 'src/redis/redis.service';
export declare class sendPulseService implements OnModuleInit {
    private readonly redisService;
    constructor(redisService: RedisService);
    onModuleInit(): Promise<void>;
    getSendPulseToken(redis?: RedisClientType): Promise<void>;
    insertSendPulseToken(token: string, redis: RedisClientType): Promise<void>;
    getSendPulseTokenFromRedis(): Promise<string>;
    sendEmail(to: string, subject: string, html: string, text: string): Promise<string>;
}
