import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { WinstonModule } from 'nest-winston';
import { winstonTransports } from './Logs/Logger';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModules } from './Graphql/graphql.modules';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisModule } from './app/redis/redis.modules';
import { mongoConfig } from './config/mongo.config';
import { CronModule } from './cron/cron.module';
import { PrismaModule } from './prisma/prisma.module';
import { FirebaseAdminModule } from './Firebase/Firebase.modules';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync(mongoConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      debug: true,
    }),
    GraphQLModules,
    PrismaModule,
    WinstonModule.forRoot({
      transports: winstonTransports,
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    }),
    CronModule,
    FirebaseAdminModule,
    RedisModule
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
