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
      Logger.error('Redis Client Error', err);
      this.logger.error(`Redis Client Error: ${err.message}`);
    });
  }

  async onModuleInit() {
    if (this.client.isOpen) {
      await this.client.connect();
      Logger.log('Connected to Redis');
      this.logger.log('Connected to Redis');
    }
  }

  async onModuleDestroy() {
    if (this.client.isOpen) {
      await this.client.quit();
      Logger.log('Disconnected from Redis');
      this.logger.log('Disconnected from Redis');
    }
  }

  getClient(): RedisClientType {
    return this.client;
  }
}
