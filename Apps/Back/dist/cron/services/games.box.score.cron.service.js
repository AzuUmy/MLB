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
exports.MlbSGamesBoxScoreService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const scheduleGames_app_1 = require("../../app/scheduleGames.app");
const mlb_game_box_score_service_api_1 = require("../../integration/mlb.game_box_score.service.api");
let MlbSGamesBoxScoreService = class MlbSGamesBoxScoreService {
    mlbGamesBoxScoreServiceApi;
    shceduleGamesApp;
    constructor(mlbGamesBoxScoreServiceApi, shceduleGamesApp) {
        this.mlbGamesBoxScoreServiceApi = mlbGamesBoxScoreServiceApi;
        this.shceduleGamesApp = shceduleGamesApp;
    }
    onModuleInit() {
        common_1.Logger.log('MLB BoxScoreService initialized');
    }
    async handleDailyScheduleFetch() {
        common_1.Logger.log('Cron triggered: Handling games boxscore of finished games');
        await this.shceduleGamesApp.checkGamesStatus();
    }
    async fetchThreeHourSync() {
        common_1.Logger.log('Cron: 3-hour deep boxscore sync');
        await this.mlbGamesBoxScoreServiceApi.getBoxScoreGamesFromApi();
    }
    async fetchMidnightFinalSync() {
        common_1.Logger.log('Cron: Midnight final boxscore sync');
        await this.mlbGamesBoxScoreServiceApi.getBoxScoreGamesFromApi();
    }
};
exports.MlbSGamesBoxScoreService = MlbSGamesBoxScoreService;
__decorate([
    (0, schedule_1.Cron)('*/30 * * * * *', { timeZone: 'UTC' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MlbSGamesBoxScoreService.prototype, "handleDailyScheduleFetch", null);
__decorate([
    (0, schedule_1.Cron)('0 0 */3 * * *', { timeZone: 'UTC' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MlbSGamesBoxScoreService.prototype, "fetchThreeHourSync", null);
__decorate([
    (0, schedule_1.Cron)('0 0 0 * * *', { timeZone: 'UTC' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MlbSGamesBoxScoreService.prototype, "fetchMidnightFinalSync", null);
exports.MlbSGamesBoxScoreService = MlbSGamesBoxScoreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mlb_game_box_score_service_api_1.MlbBoxScoreGamesServiceApi,
        scheduleGames_app_1.ScheduleGamesApp])
], MlbSGamesBoxScoreService);
//# sourceMappingURL=games.box.score.cron.service.js.map