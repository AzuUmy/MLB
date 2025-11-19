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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const schedule_entity_1 = require("./Entities/schedule.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ScheduleService = class ScheduleService {
    scheduleGamesModel;
    constructor(scheduleGamesModel) {
        this.scheduleGamesModel = scheduleGamesModel;
    }
    async createScheduleGames(scheduleGames) {
        this.scheduleGamesModel.create(scheduleGames);
    }
    async getAllScheduleGames() {
        const scheduleGames = await this.scheduleGamesModel.aggregate([
            { $unwind: '$games' },
            {
                $project: {
                    games: 'games',
                },
            },
        ]);
        return scheduleGames;
    }
    async getScheduleGamesByDate(startDate, endDate) {
        const scheduleGames = await this.scheduleGamesModel.aggregate([
            {
                $match: {
                    date: { $gte: startDate, $lte: endDate },
                },
            },
        ]);
        return scheduleGames;
    }
    async getScheduleGamesById() {
        const scheduleGamesById = await this.scheduleGamesModel.aggregate([
            { $unwind: '$games' },
            {
                $project: {
                    _id: 0,
                    game: '$games.id',
                },
            },
        ]);
        return scheduleGamesById.map((g) => g.game);
    }
};
exports.ScheduleService = ScheduleService;
exports.ScheduleService = ScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schedule_entity_1.ScheduleGames.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ScheduleService);
//# sourceMappingURL=schedule.service.js.map