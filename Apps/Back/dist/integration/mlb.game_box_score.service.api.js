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
const api_1 = require("../services/Api/api");
const gamesBoxScore_service_1 = require("../Graphql/GamesBoxScore/gamesBoxScore.service");
let MlbBoxScoreGamesServiceApi = class MlbBoxScoreGamesServiceApi {
    gamesBoxScoreService;
    constructor(gamesBoxScoreService) {
        this.gamesBoxScoreService = gamesBoxScoreService;
    }
    async getBoxScoreGamesFromApi(id) {
        try {
            const gameBoxScore = [];
            await Promise.all(id.map(async (gamesId) => {
                const response = await fetch(`${api_1.apiUrl}/${api_1.locale}/games/${gamesId}/boxscore.${api_1.format}?api_key=${api_1.token}`);
                const data = (await response.json());
                if (!data || !data.game) {
                    common_2.Logger.error(`Game ${gamesId} returned invalid payload: ${JSON.stringify(data)}`);
                    return;
                }
                if (Array.isArray(data.game)) {
                    common_2.Logger.error(`API error for game ${gamesId}: ${JSON.stringify(data)}`);
                    return [];
                }
                else {
                    common_2.Logger.warn('Pushing Games Boxscore into array');
                    gameBoxScore.push(this.sanitizeGame(data.game));
                }
            }));
            common_2.Logger.log('injecting games');
            await this.gamesBoxScoreService.creatGamesBoxScore(gameBoxScore);
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
    __metadata("design:paramtypes", [gamesBoxScore_service_1.GamesBoxScoreService])
], MlbBoxScoreGamesServiceApi);
//# sourceMappingURL=mlb.game_box_score.service.api.js.map