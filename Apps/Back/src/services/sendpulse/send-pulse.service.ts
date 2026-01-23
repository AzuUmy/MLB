import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import axios from 'axios';
import { RedisClientType } from 'redis';
import { RedisService } from 'src/redis/redis.service';
import {
  sendPulseGrantType,
  sendPulseClientId,
  sendPulseClientSecret,
  sendpulseUrl,
} from 'src/Security/env.credentials';

@Injectable()
export class sendPulseService implements OnModuleInit {
  constructor(private readonly redisService: RedisService) {}

  async onModuleInit() {
    const redis = this.redisService.getClient();
    Logger.log('SendPulse Service Initialized');
    await this.getSendPulseToken(redis);
  }

  async getSendPulseToken(redis?: RedisClientType) {
    Logger.log('Getting SendPulse Token');
    const { data } = await axios.post(`${sendpulseUrl}`, {
      grant_type: sendPulseGrantType,
      client_id: sendPulseClientId,
      client_secret: sendPulseClientSecret,
    });

    if (!data.access_token) {
      throw new Error('Failed to retrieve access token');
    }

    if (redis === undefined) {
      throw new Error('Redis client is undefined');
    }

    await this.insertSendPulseToken(data.access_token, redis);
  }

  async insertSendPulseToken(token: string, redis: RedisClientType) {
    Logger.log('Inserting SendPulse Token into Redis');
    redis.set('sendPulseToken', token);
  }
}
