import { Injectable, OnModuleInit } from '@nestjs/common';
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
    await this.getSendPulseToken();
  }

  async getSendPulseToken(redis?: RedisClientType) {
    const { data } = await axios.post(`${sendpulseUrl}`, {
      grant_type: sendPulseGrantType,
      client_id: sendPulseClientId,
      client_secret: sendPulseClientSecret,
    });

    if (!data.access_token) {
      throw new Error('Failed to retrieve access token');
    }

  await redis?.set('sendPulseToken', data.access_token, {
      EX: data.expires_in - 60,
    });
  }
}
