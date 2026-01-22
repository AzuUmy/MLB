import { Injectable } from '@nestjs/common';

@Injectable()
export class CodeValidationService {
  generateRandomCode(): Promise<number> {
    const code = Math.floor(100000 + Math.random() * 900000);
    return Promise.resolve(code);
  }
}
