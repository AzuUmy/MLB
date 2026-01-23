import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);
  private client: RedisClientType;

  constructor(private configService: ConfigService) {
    this.client = createClient({
      url: this.configService.get<string>('REDIS_URL'),
      socket: {
        connectTimeout: 5000,
      },
    });

    this.client.on('error', (err) => {
      Logger.error('Redis Client Error', err);
      this.logger.error(`Redis Client Error: ${err.message}`);
    });
  }

  async onModuleInit() {
    try {
      this.logger.log('Connecting to Redis...');

      if (!this.client.isOpen) {
        await this.client.connect();
      }

      this.logger.log('Connected to Redis');
    } catch (err) {
      this.logger.error('Failed to connect to Redis', err);
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
