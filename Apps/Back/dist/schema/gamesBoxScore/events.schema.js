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
exports.EventsSchema = exports.Events = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const runners_schema_1 = require("./runners.schema");
let Events = class Events {
    hitter_id;
    pitcher_id;
    inning;
    inning_half;
    type;
    hitter_outcome;
    id;
    runners;
};
exports.Events = Events;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Events.prototype, "hitter_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Events.prototype, "pitcher_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Events.prototype, "inning", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Events.prototype, "inning_half", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Events.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Events.prototype, "hitter_outcome", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Events.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [runners_schema_1.RunnersSchema], default: [] }),
    __metadata("design:type", Array)
], Events.prototype, "runners", void 0);
exports.Events = Events = __decorate([
    (0, mongoose_1.Schema)()
], Events);
exports.EventsSchema = mongoose_1.SchemaFactory.createForClass(Events);
//# sourceMappingURL=events.schema.js.map