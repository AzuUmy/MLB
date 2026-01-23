"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLModules = void 0;
const common_1 = require("@nestjs/common");
const schedule_modules_1 = require("./ScheduleGames/schedule.modules");
const teams_modules_1 = require("./Teams/teams.modules");
const gamesBoxScore_modules_1 = require("./GamesBoxScore/gamesBoxScore.modules");
const auth_modules_1 = require("./Auth/auth.modules");
const email_modules_1 = require("./Email/email.modules");
let GraphQLModules = class GraphQLModules {
};
exports.GraphQLModules = GraphQLModules;
exports.GraphQLModules = GraphQLModules = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_modules_1.ScheduleModule,
            teams_modules_1.TeamsModule,
            gamesBoxScore_modules_1.gamesBoxScoreModules,
            auth_modules_1.AuthModule,
            email_modules_1.emailModule,
        ],
        exports: [
            schedule_modules_1.ScheduleModule,
            teams_modules_1.TeamsModule,
            gamesBoxScore_modules_1.gamesBoxScoreModules,
            auth_modules_1.AuthModule,
            email_modules_1.emailModule,
        ],
    })
], GraphQLModules);
//# sourceMappingURL=graphql.modules.js.map