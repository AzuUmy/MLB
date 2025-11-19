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
const date_1 = require("../helper/date");
const mlb_game_box_score_service_api_1 = require("../integration/mlb.game_box_score.service.api");
let ScheduleGamesApp = class ScheduleGamesApp {
    scheduleService;
    mlbBoxScoreGamesServiceApi;
    constructor(scheduleService, mlbBoxScoreGamesServiceApi) {
        this.scheduleService = scheduleService;
        this.mlbBoxScoreGamesServiceApi = mlbBoxScoreGamesServiceApi;
    }
    async getScheduleGamesSeries(startDate, endDate) {
        const scheduleGames = await this.scheduleService.getScheduleGamesByDate(startDate, endDate);
        const seriesMap = new Map();
        for (const schedule of scheduleGames) {
            for (const game of schedule.games) {
                const serie = game.ps_round;
                const home = game.home.abbr;
                const away = game.away.abbr;
                const matchupKey = [home, away].sort().join('_') + '_' + serie;
                if (!seriesMap.has(matchupKey)) {
                    seriesMap.set(matchupKey, {
                        series: serie,
                        games: [],
                    });
                }
                seriesMap.get(matchupKey).games.push(game);
            }
        }
        const scheduleGamesSeries = Array.from(seriesMap.values());
        for (const s of scheduleGamesSeries) {
            s.games.sort((a, b) => Number(a.ps_game ?? 0) - Number(b.ps_game ?? 0));
        }
        const parseSeries = (series) => {
            const league = series.startsWith('AL')
                ? 'AL'
                : series.startsWith('NL')
                    ? 'NL'
                    : null;
            const stage = league ? series.slice(league.length) : series;
            return { league, stage };
        };
        const stageGroups = {};
        for (const s of scheduleGamesSeries) {
            const { league, stage } = parseSeries(s.series);
            if (!stageGroups[stage]) {
                stageGroups[stage] = { AL: [], NL: [], other: [] };
            }
            if (league === 'AL')
                stageGroups[stage].AL.push(s);
            else if (league === 'NL')
                stageGroups[stage].NL.push(s);
            else
                stageGroups[stage].other.push(s);
        }
        const stageOrder = ['WC', 'DS', 'CS', 'WS'];
        const result = [];
        for (const stage of stageOrder) {
            const group = stageGroups[stage];
            if (!group)
                continue;
            if (stage === 'WS') {
                result.push(...group.AL, ...group.NL, ...group.other);
                continue;
            }
            const max = Math.max(group.AL.length, group.NL.length);
            for (let i = 0; i < max; i++) {
                if (i < group.AL.length)
                    result.push(group.AL[i]);
                if (i < group.NL.length)
                    result.push(group.NL[i]);
            }
            result.push(...group.other);
        }
        return result;
    }
    async checkGamesStatus() {
        const date = new Date();
        const today = (0, date_1.getCurrentDateInYearMonthDay)(date);
        const scheduleGamesOfTheDay = await this.scheduleService.getScheduleGamesByDate(today, today);
        const allGames = scheduleGamesOfTheDay.flatMap((e) => e.games);
        if (allGames.length === 0) {
            common_1.Logger.warn(`No games found in the provided date, ${today}`);
            return;
        }
        const closedGamesOnDate = [];
        allGames.map((e) => {
            if (e.status === 'closed') {
                closedGamesOnDate.push(e);
            }
        });
        this.mlbBoxScoreGamesServiceApi.getBoxScoreGamesFromApi(closedGamesOnDate);
    }
};
exports.ScheduleGamesApp = ScheduleGamesApp;
exports.ScheduleGamesApp = ScheduleGamesApp = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [schedule_service_1.ScheduleService,
        mlb_game_box_score_service_api_1.MlbBoxScoreGamesServiceApi])
], ScheduleGamesApp);
//# sourceMappingURL=scheduleGames.app.js.map