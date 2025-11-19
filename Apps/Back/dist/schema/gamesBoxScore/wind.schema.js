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
exports.WindSchema = exports.Wind = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Wind = class Wind {
    speed_mph;
    direction;
};
exports.Wind = Wind;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Wind.prototype, "speed_mph", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Wind.prototype, "direction", void 0);
exports.Wind = Wind = __decorate([
    (0, mongoose_1.Schema)()
], Wind);
exports.WindSchema = mongoose_1.SchemaFactory.createForClass(Wind);
//# sourceMappingURL=wind.schema.js.map