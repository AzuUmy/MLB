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
exports.Game = void 0;
const graphql_1 = require("@nestjs/graphql");
const Mound_visit_entity_1 = require("./Mound_visit.entity");
const Reviews_entity_1 = require("./Reviews.entity");
const Time_zones_entity_1 = require("./Time_zones.entity");
const venu_entity_1 = require("../../ScheduleGames/Entities/venu.entity");
const broadcast_entity_1 = require("../../ScheduleGames/Entities/broadcast.entity");
const Weather_entity_1 = require("./Weather.entity");
const Final_entity_1 = require("./Final.entity");
const Team_status_entity_1 = require("./Team_status.entity");
let Game = class Game {
    id;
    status;
    coverage;
    game_number;
    day_night;
    scheduled;
    home_team;
    away_team;
    ps_round;
    ps_game;
    attendance;
    duration;
    season_id;
    season_type;
    season_year;
    double_header;
    entry_mode;
    reference;
    mound_visits;
    reviews;
    time_zones;
    venue;
    broadcasts;
    weather;
    final;
    home;
    away;
};
exports.Game = Game;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "coverage", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Game.prototype, "game_number", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "day_night", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "scheduled", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "home_team", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "away_team", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "ps_round", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "ps_game", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Game.prototype, "attendance", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "duration", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "season_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "season_type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Game.prototype, "season_year", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Game.prototype, "double_header", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "entry_mode", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Game.prototype, "reference", void 0);
__decorate([
    (0, graphql_1.Field)(() => Mound_visit_entity_1.MoundVisits, { nullable: true }),
    __metadata("design:type", Mound_visit_entity_1.MoundVisits)
], Game.prototype, "mound_visits", void 0);
__decorate([
    (0, graphql_1.Field)(() => Reviews_entity_1.Reviews, { nullable: true }),
    __metadata("design:type", Reviews_entity_1.Reviews)
], Game.prototype, "reviews", void 0);
__decorate([
    (0, graphql_1.Field)(() => Time_zones_entity_1.TimeZones, { nullable: true }),
    __metadata("design:type", Time_zones_entity_1.TimeZones)
], Game.prototype, "time_zones", void 0);
__decorate([
    (0, graphql_1.Field)(() => venu_entity_1.Venue, { nullable: true }),
    __metadata("design:type", venu_entity_1.Venue)
], Game.prototype, "venue", void 0);
__decorate([
    (0, graphql_1.Field)(() => [broadcast_entity_1.Broadcast], { nullable: 'itemsAndList' }),
    __metadata("design:type", Array)
], Game.prototype, "broadcasts", void 0);
__decorate([
    (0, graphql_1.Field)(() => Weather_entity_1.Weather, { nullable: true }),
    __metadata("design:type", Weather_entity_1.Weather)
], Game.prototype, "weather", void 0);
__decorate([
    (0, graphql_1.Field)(() => Final_entity_1.Final, { nullable: true }),
    __metadata("design:type", Final_entity_1.Final)
], Game.prototype, "final", void 0);
__decorate([
    (0, graphql_1.Field)(() => Team_status_entity_1.TeamStatus, { nullable: true }),
    __metadata("design:type", Team_status_entity_1.TeamStatus)
], Game.prototype, "home", void 0);
__decorate([
    (0, graphql_1.Field)(() => Team_status_entity_1.TeamStatus, { nullable: true }),
    __metadata("design:type", Team_status_entity_1.TeamStatus)
], Game.prototype, "away", void 0);
exports.Game = Game = __decorate([
    (0, graphql_1.ObjectType)()
], Game);
//# sourceMappingURL=Game.entity.js.map