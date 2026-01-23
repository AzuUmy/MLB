import { Global, Module } from '@nestjs/common';
import { sendPulseService } from './send-pulse.service';

@Global()
@Module({
  providers: [sendPulseService],
  exports: [sendPulseService],
})
export class SendPulseModule {}
