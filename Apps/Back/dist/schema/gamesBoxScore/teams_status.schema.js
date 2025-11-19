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
exports.TeamStatusSchema = exports.TeamStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const pitcher_schema_1 = require("./pitcher.schema");
const scoring_schema_1 = require("./scoring.schema");
const events_schema_1 = require("./events.schema");
let TeamStatus = class TeamStatus {
    name;
    market;
    abbr;
    id;
    runs;
    hits;
    errors;
    win;
    loss;
    probable_pitcher;
    starting_pitcher;
    scoring;
    events;
};
exports.TeamStatus = TeamStatus;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TeamStatus.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TeamStatus.prototype, "market", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TeamStatus.prototype, "abbr", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TeamStatus.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TeamStatus.prototype, "runs", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TeamStatus.prototype, "hits", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TeamStatus.prototype, "errors", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TeamStatus.prototype, "win", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TeamStatus.prototype, "loss", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: pitcher_schema_1.PitcherSchema, required: false }),
    __metadata("design:type", pitcher_schema_1.Pitcher)
], TeamStatus.prototype, "probable_pitcher", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: pitcher_schema_1.PitcherSchema, required: false }),
    __metadata("design:type", pitcher_schema_1.Pitcher)
], TeamStatus.prototype, "starting_pitcher", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [scoring_schema_1.ScoringSchema], default: [] }),
    __metadata("design:type", Array)
], TeamStatus.prototype, "scoring", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [events_schema_1.EventsSchema], default: [] }),
    __metadata("design:type", Array)
], TeamStatus.prototype, "events", void 0);
exports.TeamStatus = TeamStatus = __decorate([
    (0, mongoose_1.Schema)()
], TeamStatus);
exports.TeamStatusSchema = mongoose_1.SchemaFactory.createForClass(TeamStatus);
//# sourceMappingURL=teams_status.schema.js.map