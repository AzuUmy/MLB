import axios from 'axios';
import {
  sendPulseGrantType,
  sendPulseClientId,
  sendPulseClientSecret,
  sendpulseUrl,
} from 'src/Security/env.credentials';

export class sendPulseService {
  async getSendPulseToken() {
    const { data } = await axios.post(`${sendpulseUrl}`, {
      grant_type: sendPulseGrantType,
      client_id: sendPulseClientId,
      client_secret: sendPulseClientSecret,
    });

    return data.access_token;
  }
}
