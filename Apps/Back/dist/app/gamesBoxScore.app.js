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
exports.GamesBoxScoreApp = void 0;
const common_1 = require("@nestjs/common");
const schedule_service_1 = require("../Graphql/ScheduleGames/schedule.service");
const mlb_game_box_score_service_api_1 = require("../integration/mlb.game_box_score.service.api");
let GamesBoxScoreApp = class GamesBoxScoreApp {
    scheduleService;
    mlbBoxScoregamesServiceApp;
    constructor(scheduleService, mlbBoxScoregamesServiceApp) {
        this.scheduleService = scheduleService;
        this.mlbBoxScoregamesServiceApp = mlbBoxScoregamesServiceApp;
    }
    async getGamesBoxScore(id) {
        const gamesBoxScore = await this.scheduleService.getScheduleGamesById();
        //const scheduleGamesId = gamesBoxScore.map(e => e.games.map(a => a.id))
        common_1.Logger.log('games boxScore id for testing', gamesBoxScore);
        //const boxScore = this.mlbBoxScoregamesServiceApp.getBoxScoreGamesFromApi(scheduleGamesId)
    }
};
exports.GamesBoxScoreApp = GamesBoxScoreApp;
exports.GamesBoxScoreApp = GamesBoxScoreApp = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [schedule_service_1.ScheduleService,
        mlb_game_box_score_service_api_1.MlbBoxScoreGamesServiceApi])
], GamesBoxScoreApp);
//# sourceMappingURL=gamesBoxScore.app.js.map