import { Injectable } from '@nestjs/common';
import { sendPulseService } from 'src/services/sendpulse/send-pulse.service';
import { renderTemplate } from 'src/templates/render.template';
@Injectable()
export class EmailService {
  constructor(private readonly sendPulseService: sendPulseService) {}

  async sendCodeEmail(to: string, code: number): Promise<string> {
    const html = renderTemplate('code_email.template', {
      code,
      loginUrl: 'https://yourdomain.com/login',
    });

    return this.sendPulseService.sendEmail(
      to,
      'Your Login Code',
      html,
      `Your login code is: ${code}`,
    );
  }
}
