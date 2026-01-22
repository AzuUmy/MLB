import { Injectable, OnModuleInit } from '@nestjs/common';
import axios from 'axios';
import {
  sendPulseGrantType,
  sendPulseClientId,
  sendPulseClientSecret,
  sendpulseUrl,
} from 'src/Security/env.credentials';

@Injectable()
export class sendPulseService implements OnModuleInit {
  constructor() {}

  async onModuleInit() {
    await this.getSendPulseToken();
  }

  async getSendPulseToken() {
    const { data } = await axios.post(`${sendpulseUrl}`, {
      grant_type: sendPulseGrantType,
      client_id: sendPulseClientId,
      client_secret: sendPulseClientSecret,
    });

    return data.access_token;
  }
}
