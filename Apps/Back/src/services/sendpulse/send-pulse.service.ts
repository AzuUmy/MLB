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

  async getSendPulseTokenFromRedis(): Promise<string> {
    const redis = this.redisService.getClient();
    const token = await redis.get('sendPulseToken');

    if (!token) {
      Logger.log('SendPulse Token not found in Redis, fetching new token');
      await this.getSendPulseToken(redis);
      const newToken = await redis.get('sendPulseToken');
      if (!newToken) {
        throw new Error('Failed to retrieve SendPulse token from Redis');
      }
      return newToken;
    }

    return token;
  }

  async sendEmail(
    to: string,
    subject: string,
    html: string,
    text: string,
  ): Promise<string> {
    try {
      await axios.post(
        'https://api.sendpulse.com/smtp/emails',
        {
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
        },
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk2ZjMyMDNmYmRiZmE2NTFlOGE2OTJkNzY2NjIzNzMxOTk3NmZhYmZlZjljMzY2ZjVlNjhjNzQwMWFmMzA4MDE4YjUwODAzMTA3YjJjNTc0In0.eyJhdWQiOiJjZDVhNGU0OTZlMDQ5ODcwZWZjYjE2Yjk0OGQ2MzJlOCIsImp0aSI6Ijk2ZjMyMDNmYmRiZmE2NTFlOGE2OTJkNzY2NjIzNzMxOTk3NmZhYmZlZjljMzY2ZjVlNjhjNzQwMWFmMzA4MDE4YjUwODAzMTA3YjJjNTc0IiwiaWF0IjoxNzY5MTk5MTYxLCJuYmYiOjE3NjkxOTkxNjEsImV4cCI6MTc2OTIwMjc2MSwic3ViIjoiIiwic2NvcGVzIjpbXSwidXNlciI6eyJpZCI6OTMzMDA0MiwiZ3JvdXBfaWQiOm51bGwsInBhcmVudF9pZCI6bnVsbCwiY29udGV4dCI6eyJhY2NsaW0iOiIwIn0sImFyZWEiOiJyZXN0IiwiYXBwX2lkIjpudWxsfX0.ZaPWeyc0tVtdlOEQSR6Vy3zdofLwyne6gsNk4wYfryLssPcWa_DwE2wDpUCc-R6FudzaJY-W4HHfyWazcKgSy7nVyBIqMpCS3xfvf9HLHKRy3FzuuK-lIe8XdQerfB5Epf7nItkZrwN8kNJIAfs3Ke5a_pLUPA5pv4aH54glOT1eXw0iWBXzkuy3bXFRRPcPvbgRIxUA52L5kwiSwOLZkGMJyrs3tC6dReBvERyV1F2lESBzpETY1SEdC6jlvPJjbCliYU2exs4btlkFRvbi2F3woOufWkAHRzRGzPGiBM-pYe0cwn9rQsxDlsUO_V8agktCEMBxW_ej5mc9XYQqYQ`,
          },
        },
      );
    } catch (erro) {
      throw new Error('Error sending email, check credentials' + erro);
    }

    return 'sucessfully sent email';
  }
}
