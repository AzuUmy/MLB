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
exports.PitcherSchema = exports.Pitcher = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Pitcher = class Pitcher {
    preferred_name;
    first_name;
    last_name;
    id;
    full_name;
    jersey_number;
    win;
    loss;
    era;
};
exports.Pitcher = Pitcher;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Pitcher.prototype, "preferred_name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Pitcher.prototype, "first_name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Pitcher.prototype, "last_name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Pitcher.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Pitcher.prototype, "full_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Pitcher.prototype, "jersey_number", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Number)
], Pitcher.prototype, "win", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Number)
], Pitcher.prototype, "loss", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Number)
], Pitcher.prototype, "era", void 0);
exports.Pitcher = Pitcher = __decorate([
    (0, mongoose_1.Schema)()
], Pitcher);
exports.PitcherSchema = mongoose_1.SchemaFactory.createForClass(Pitcher);
//# sourceMappingURL=pitcher.schema.js.map