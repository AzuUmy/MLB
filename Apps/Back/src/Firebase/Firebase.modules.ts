import { Module } from '@nestjs/common';
import { FirebaseAdminService } from './Firebase.service';

@Module({
  providers: [FirebaseAdminService],
  exports: [FirebaseAdminService],
})
export class FirebaseAdminModule {}
