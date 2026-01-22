import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';
import { ConfigService } from '@nestjs/config';
import { redisHost } from 'src/Security/env.credentials';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);
  private client: RedisClientType;

  constructor(private configService: ConfigService) {
    this.client = createClient({
      url: this.configService.get<string>(String(redisHost)),
    });

    this.client.on('error', (err) => {
      this.logger.error('Redis Client Error', err);
    });
  }

  async onModuleInit() {
    if (this.client.isOpen) {
      await this.client.connect();
      this.logger.log('Connected to Redis');
    }
  }

  async onModuleDestroy() {
    if (this.client.isOpen) {
      await this.client.quit();
      this.logger.log('Disconnected from Redis');
    }
  }

  getClient(): RedisClientType {
    return this.client;
  }
}
