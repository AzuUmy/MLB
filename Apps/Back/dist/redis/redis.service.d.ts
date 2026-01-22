import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { RedisClientType } from 'redis';
import { ConfigService } from '@nestjs/config';
export declare class RedisService implements OnModuleInit, OnModuleDestroy {
    private configService;
    private readonly logger;
    private client;
    constructor(configService: ConfigService);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    getClient(): RedisClientType;
}
