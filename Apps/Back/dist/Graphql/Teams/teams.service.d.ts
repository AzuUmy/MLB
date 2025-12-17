import { Teams } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TeamsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createTeams(data: Teams[]): Promise<import("@prisma/client").Prisma.BatchPayload>;
    getAllTeams(): Promise<{
        name: string;
        id: string;
        market: string;
        abbr: string;
    }[]>;
}
