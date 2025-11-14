"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlbBoxScoreGamesServiceApi = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const api_1 = require("../services/Api/api");
let MlbBoxScoreGamesServiceApi = class MlbBoxScoreGamesServiceApi {
    async getBoxScoreGamesFromApi(id) {
        try {
            const gameBoxScore = [];
            id.forEach(async (gamesId) => {
                const response = await fetch(`${api_1.apiUrl}/${api_1.locale}/games/${gamesId}/boxscore.${api_1.format}?api_key=${api_1.token}`);
                const data = (await response.json());
                gameBoxScore.push(...data);
            });
            return gameBoxScore;
        }
        catch (erro) {
            common_2.Logger.error(`erro fetching games from api: ${erro}`);
        }
    }
};
exports.MlbBoxScoreGamesServiceApi = MlbBoxScoreGamesServiceApi;
exports.MlbBoxScoreGamesServiceApi = MlbBoxScoreGamesServiceApi = __decorate([
    (0, common_1.Injectable)()
], MlbBoxScoreGamesServiceApi);
//# sourceMappingURL=mlb.game_box_score.service.api.js.map