"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleGamesApp = void 0;
const common_1 = require("@nestjs/common");
const schedule_service_1 = require("../Graphql/ScheduleGames/schedule.service");
const common_2 = require("@nestjs/common");
const api_1 = require("../services/Api/api");
let ScheduleGamesApp = class ScheduleGamesApp {
    scheduleService;
    constructor(scheduleService) {
        this.scheduleService = scheduleService;
    }
    async getScheduleGamesSeries(startDate, endDate) {
        const scheduleGames = await this.scheduleService.getScheduleGames(startDate, endDate);
        const scheduleGamesSeries = [];
        scheduleGames.forEach((schedule) => {
            const series = schedule.games.map((e) => e.ps_round);
            const games = schedule.games;
            series.forEach((serie) => {
                if (!scheduleGamesSeries.map((e) => e.series).includes(serie)) {
                    scheduleGamesSeries.push({
                        series: serie,
                        games: games,
                    });
                }
            });
        });
        return scheduleGamesSeries;
    }
    async getScheduleGamesFromApi(year, month, day) {
        try {
            const response = await fetch(`${api_1.apiUrl}/${api_1.locale}/games/${year}/${month}/${day}/schedule.${api_1.format}?api_key=${api_1.token}`);
            const data = (await response.json());
            return data;
        }
        catch (error) {
            common_2.Logger.error('Error fetching schedule games from API:', error);
            return undefined;
        }
    }
};
exports.ScheduleGamesApp = ScheduleGamesApp;
exports.ScheduleGamesApp = ScheduleGamesApp = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [schedule_service_1.ScheduleService])
], ScheduleGamesApp);
//# sourceMappingURL=scheduleGames.app.js.map