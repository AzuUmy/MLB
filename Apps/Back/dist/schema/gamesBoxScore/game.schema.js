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
exports.GameSchema = exports.Game = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mound_visits_schema_1 = require("./mound_visits.schema");
const reviews_schema_1 = require("./reviews.schema");
const time_zones_schema_1 = require("../time_zones.schema");
const weather_schema_1 = require("./weather.schema");
const final_info_schema_1 = require("./final_info.schema");
const teams_status_schema_1 = require("./teams_status.schema");
const venue_schema_1 = require("../scheduleGames/venue.schema");
const broadcast_schema_1 = require("../scheduleGames/broadcast.schema");
const pitching_schema_1 = require("./pitching.schema");
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
    pitching;
};
exports.Game = Game;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Game.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Game.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Game.prototype, "coverage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Game.prototype, "game_number", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Game.prototype, "day_night", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Game.prototype, "scheduled", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Game.prototype, "home_team", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Game.prototype, "away_team", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Game.prototype, "ps_round", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Game.prototype, "ps_game", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Game.prototype, "attendance", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Game.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Game.prototype, "season_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Game.prototype, "season_type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Game.prototype, "season_year", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Game.prototype, "double_header", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Game.prototype, "entry_mode", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Game.prototype, "reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mound_visits_schema_1.MoundVisitsSchema, required: false }),
    __metadata("design:type", mound_visits_schema_1.MoundVisits)
], Game.prototype, "mound_visits", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: reviews_schema_1.ReviewsSchema, required: false }),
    __metadata("design:type", reviews_schema_1.Reviews)
], Game.prototype, "reviews", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: time_zones_schema_1.TimeZonesSchema, required: false }),
    __metadata("design:type", time_zones_schema_1.TimeZones)
], Game.prototype, "time_zones", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: venue_schema_1.VenueSchema, required: false }),
    __metadata("design:type", venue_schema_1.Venue)
], Game.prototype, "venue", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [broadcast_schema_1.BroadcastSchema], default: [] }),
    __metadata("design:type", Array)
], Game.prototype, "broadcasts", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: weather_schema_1.WeatherSchema, required: false }),
    __metadata("design:type", weather_schema_1.Weather)
], Game.prototype, "weather", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: final_info_schema_1.FinalInfoSchema, required: false }),
    __metadata("design:type", final_info_schema_1.FinalInfo)
], Game.prototype, "final", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: teams_status_schema_1.TeamStatusSchema, required: false }),
    __metadata("design:type", teams_status_schema_1.TeamStatus)
], Game.prototype, "home", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: teams_status_schema_1.TeamStatusSchema, required: false }),
    __metadata("design:type", teams_status_schema_1.TeamStatus)
], Game.prototype, "away", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: pitching_schema_1.PitchingSchema, required: false }),
    __metadata("design:type", pitching_schema_1.Pitching)
], Game.prototype, "pitching", void 0);
exports.Game = Game = __decorate([
    (0, mongoose_1.Schema)({ collection: 'gamesboxscore' })
], Game);
exports.GameSchema = mongoose_1.SchemaFactory.createForClass(Game);
//# sourceMappingURL=game.schema.js.map