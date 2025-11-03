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
        if (existingGames.length) {
            existingGames.forEach((existingList) => {
                games.games.forEach((newGame) => {
                    existingList.games.forEach((existingGame) => {
                        if (newGame.id === existingGame.id &&
                            newGame.ps_round === existingGame.ps_round) {
                            common_2.Logger.warn(`Game with id ${newGame.id} already exists for date ${games.date}`);
                        }
                        else {
                            this.scheduleGamesApp['scheduleService'].createScheduleGames([
                                games,
                            ]);
                            common_2.Logger.log(`Storing new game with id ${newGame.id} for date ${games.date}`);
                        }
                    });
                });
            });
        }
        else {
            this.scheduleGamesApp['scheduleService'].createScheduleGames([games]);
            common_2.Logger.log(`Storing games for new date ${games.date}`);
        }
    }
};
exports.MlbServiceApi = MlbServiceApi;
exports.MlbServiceApi = MlbServiceApi = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [scheduleGames_app_1.ScheduleGamesApp])
], MlbServiceApi);
//# sourceMappingURL=mlb.service.api.js.map