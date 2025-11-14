"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesBoxScoreModules = void 0;
const common_1 = require("@nestjs/common");
const gamesBoxScore_service_1 = require("./gamesBoxScore.service");
const gamesBoxScore_resolver_1 = require("./gamesBoxScore.resolver");
const mongoose_1 = require("@nestjs/mongoose");
const scheduleGames_schema_1 = require("../../schema/scheduleGames/scheduleGames.schema");
const gamesBoxScore_app_1 = require("../../app/gamesBoxScore.app");
const schedule_modules_1 = require("../ScheduleGames/schedule.modules");
let gamesBoxScoreModules = class gamesBoxScoreModules {
};
exports.gamesBoxScoreModules = gamesBoxScoreModules;
exports.gamesBoxScoreModules = gamesBoxScoreModules = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_modules_1.ScheduleModule,
            mongoose_1.MongooseModule.forFeature([
                { name: scheduleGames_schema_1.ScheduleGames.name, schema: scheduleGames_schema_1.ScheduleGamesSchema },
            ]),
        ],
        providers: [gamesBoxScore_service_1.GamesBoxScoreService, gamesBoxScore_resolver_1.GamesBoxScoreResolver, gamesBoxScore_app_1.GamesBoxScoreApp, schedule_modules_1.ScheduleModule],
        exports: [gamesBoxScore_service_1.GamesBoxScoreService],
    })
], gamesBoxScoreModules);
//# sourceMappingURL=gamesBoxScore.modules.js.map