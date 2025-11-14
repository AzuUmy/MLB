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
exports.MoundVisits = void 0;
const graphql_1 = require("@nestjs/graphql");
const Metting_entity_1 = require("./Metting.entity");
let MoundVisits = class MoundVisits {
    home;
    away;
};
exports.MoundVisits = MoundVisits;
__decorate([
    (0, graphql_1.Field)(() => Metting_entity_1.Metting),
    __metadata("design:type", Metting_entity_1.Metting)
], MoundVisits.prototype, "home", void 0);
__decorate([
    (0, graphql_1.Field)(() => Metting_entity_1.Metting),
    __metadata("design:type", Metting_entity_1.Metting)
], MoundVisits.prototype, "away", void 0);
exports.MoundVisits = MoundVisits = __decorate([
    (0, graphql_1.ObjectType)()
], MoundVisits);
//# sourceMappingURL=Mound_visit.entity.js.map