"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const app_resolver_1 = require("./app.resolver");
const graphql_1 = require("@nestjs/graphql");
const nest_winston_1 = require("nest-winston");
const Logger_1 = require("./Logs/Logger");
const apollo_1 = require("@nestjs/apollo");
const graphql_modules_1 = require("./Graphql/graphql.modules");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const mongo_config_1 = require("./config/mongo.config");
const cron_module_1 = require("./cron/cron.module");
const prisma_module_1 = require("./prisma/prisma.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRootAsync(mongo_config_1.mongoConfig),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: true,
                playground: true,
                debug: true,
            }),
            graphql_modules_1.GraphQLModules,
            prisma_module_1.PrismaModule,
            nest_winston_1.WinstonModule.forRoot({
                transports: Logger_1.winstonTransports,
                level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
            }),
            cron_module_1.CronModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, app_resolver_1.AppResolver],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map