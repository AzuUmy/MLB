import { Injectable } from '@nestjs/common';
import { Teams } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class TeamsService {
  constructor(private readonly prisma: PrismaService) {}
  async createTeams(data: Teams[]) {
    return this.prisma.teams.createMany({ data });
  }

  async getAllTeams() {
    return this.prisma.teams.findMany();
  }
}
