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
exports.MlbServiceApi = void 0;
const common_1 = require("@nestjs/common");
const scheduleGames_app_1 = require("../app/scheduleGames.app");
const common_2 = require("@nestjs/common");
const date_1 = require("../helper/date");
let MlbServiceApi = class MlbServiceApi {
    scheduleGamesApp;
    constructor(scheduleGamesApp) {
        this.scheduleGamesApp = scheduleGamesApp;
    }
    async fetchDailyScheduleGames() {
        const today = new Date();
        const year = today.getFullYear().toString();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        const games = await this.scheduleGamesApp.getScheduleGamesFromApi(year, month, day);
        if (!games || !games.games?.length) {
            common_2.Logger.warn('No games found for today');
            return;
        }
        const existingGames = await this.scheduleGamesApp['scheduleService'].getScheduleGames(games.date, games.date);
        const matchingGames = [];
        games.games.forEach((game) => {
            matchingGames.push({
                id: game.id,
                serie: game.ps_round,
                date: games.date,
            });
        });
        const hasDuplicates = existingGames.some((existingGame) => existingGame.games.some((game) => matchingGames.some((matching) => matching.id === game.id &&
            matching.serie === game.ps_round &&
            matching.date === games.date)));
        if (hasDuplicates) {
            common_2.Logger.warn('Games for today already exist in the database');
            return;
        }
        const newScheduleGame = [];
        const newGame = [];
        games.games.forEach((game) => {
            const ts = (0, date_1.toTimestamp)(game.scheduled);
            newGame.push({
                ...game,
                scheduled: ts !== null ? ts.toString() : game.scheduled,
            });
        });
        newScheduleGame.push({
            league: games.league,
            date: games.date,
            games: newGame,
            _comment: games._comment,
        });
        await this.scheduleGamesApp['scheduleService'].createScheduleGames(newScheduleGame);
        common_2.Logger.log("Successfully fetched and stored today's schedule games");
    }
};
exports.MlbServiceApi = MlbServiceApi;
exports.MlbServiceApi = MlbServiceApi = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [scheduleGames_app_1.ScheduleGamesApp])
], MlbServiceApi);
//# sourceMappingURL=mlb.service.api.js.map