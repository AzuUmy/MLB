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
exports.MlbBoxScoreGamesServiceApi = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const env_credentials_1 = require("../Security/env.credentials");
const schedule_service_1 = require("../Graphql/ScheduleGames/schedule.service");
const gamesBoxScore_app_1 = require("../app/gamesBoxScore.app");
let MlbBoxScoreGamesServiceApi = class MlbBoxScoreGamesServiceApi {
    gamesBoxScoreApp;
    scheduleGamesService;
    constructor(gamesBoxScoreApp, scheduleGamesService) {
        this.gamesBoxScoreApp = gamesBoxScoreApp;
        this.scheduleGamesService = scheduleGamesService;
    }
    async getBoxScoreGamesFromApi(games) {
        try {
            const scheduleGames = !games?.length
                ? (await this.scheduleGamesService.getAllScheduleGames()).filter((e) => e.status === 'closed')
                : games;
            const gameBoxScore = [];
            await Promise.all(scheduleGames.map(async (games) => {
                const response = await fetch(`${env_credentials_1.apiUrl}/${env_credentials_1.locale}/games/${games.id}/boxscore.${env_credentials_1.format}?api_key=${env_credentials_1.token}`);
                const data = (await response.json());
                if (!data || !data.game) {
                    common_2.Logger.error(`Game ${games.id} returned invalid payload: ${JSON.stringify(data)}`);
                    return;
                }
                if (Array.isArray(data.game)) {
                    common_2.Logger.error(`API error for game ${games.id}: ${JSON.stringify(data)}`);
                    return [];
                }
                else {
                    common_2.Logger.warn('Pushing Games Boxscore into array');
                    gameBoxScore.push(this.sanitizeGame(data.game));
                }
            }));
            common_2.Logger.log('injecting games');
            await this.gamesBoxScoreApp['gamexBoxScoreService'].creatGamesBoxScore(gameBoxScore);
        }
        catch (erro) {
            common_2.Logger.error(`erro fetching games from api: ${erro}`);
        }
    }
    sanitizeGame(game) {
        if (!game)
            return game;
        const fix = (v) => (v === 'X' || v === '' || v === null ? null : v);
        ['home', 'away'].forEach((side) => {
            const team = game[side];
            if (!team)
                return;
            if (!Array.isArray(team.scoring))
                return;
            team.scoring = team.scoring.map((inning) => ({
                ...inning,
                runs: fix(inning?.runs),
                hits: fix(inning?.hits),
                errors: fix(inning?.errors),
            }));
        });
        return game;
    }
};
exports.MlbBoxScoreGamesServiceApi = MlbBoxScoreGamesServiceApi;
exports.MlbBoxScoreGamesServiceApi = MlbBoxScoreGamesServiceApi = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [gamesBoxScore_app_1.GamesBoxScoreApp,
        schedule_service_1.ScheduleService])
], MlbBoxScoreGamesServiceApi);
//# sourceMappingURL=mlb.game_box_score.service.api.js.map