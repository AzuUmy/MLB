"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronModule = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const mongoose_1 = require("@nestjs/mongoose");
const cron_service_1 = require("./cron.service");
const schedule_games_cron_service_1 = require("./services/schedule.games.cron.service");
const mlb_schedule_games_service_api_1 = require("../integration/mlb.schedule_games.service.api");
const scheduleGames_app_1 = require("../app/scheduleGames.app");
const schedule_service_1 = require("../Graphql/ScheduleGames/schedule.service");
const schedule_entity_1 = require("../Graphql/ScheduleGames/Entities/schedule.entity");
const scheduleGames_schema_1 = require("../schema/scheduleGames/scheduleGames.schema");
let CronModule = class CronModule {
};
exports.CronModule = CronModule;
exports.CronModule = CronModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                { name: schedule_entity_1.ScheduleGames.name, schema: scheduleGames_schema_1.ScheduleGamesSchema },
            ]),
        ],
        providers: [
            cron_service_1.CronService,
            schedule_games_cron_service_1.MlbSchedulerService,
            mlb_schedule_games_service_api_1.MlbScheduleGamesServiceApi,
            scheduleGames_app_1.ScheduleGamesApp,
            schedule_service_1.ScheduleService,
        ],
        exports: [schedule_games_cron_service_1.MlbSchedulerService],
    })
], CronModule);
//# sourceMappingURL=cron.module.js.map