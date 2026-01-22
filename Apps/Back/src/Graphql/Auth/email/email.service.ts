import { Injectable } from '@nestjs/common';
import { sendPulseService } from 'src/services/send-pulse-service';

@Injectable()
export class EmailService {
  constructor(private readonly sendPulseService: sendPulseService) {}

  async generateSendPulseToken() {
    this.sendPulseService.getSendPulseToken();
  }

  
  async getSendPulseToken(){
    
  }

}
