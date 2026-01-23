import { Global, Module } from '@nestjs/common';
import { sendPulseService } from './send-pulse.service';
import { RedisService } from 'src/redis/redis.service';

@Global()
@Module({
  providers: [sendPulseService, RedisService],
  exports: [sendPulseService],
})
export class SendPulseModule {}
