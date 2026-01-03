import { Auth, Email } from '@my-mlb/shared';
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async GetUserEmail(email: string): Promise<Email> {
    let userEmail = {};
    try {
      userEmail = this.prisma.credentials.findUnique({
        where: {
          email,
        },
      });
      Logger.log('Successfully fetched email info from database');
    } catch (error) {
      Logger.log('Error fetching email data from database');
      return {};
    }
    return userEmail;
  }
}
