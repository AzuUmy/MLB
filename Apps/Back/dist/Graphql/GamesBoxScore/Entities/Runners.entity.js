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
exports.Runners = void 0;
const graphql_1 = require("@nestjs/graphql");
let Runners = class Runners {
    starting_base;
    first_name;
    last_name;
    preferred_name;
    jersey_number;
    id;
    full_name;
    suffix;
};
exports.Runners = Runners;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Runners.prototype, "starting_base", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Runners.prototype, "first_name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Runners.prototype, "last_name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Runners.prototype, "preferred_name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Runners.prototype, "jersey_number", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Runners.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Runners.prototype, "full_name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Runners.prototype, "suffix", void 0);
exports.Runners = Runners = __decorate([
    (0, graphql_1.ObjectType)()
], Runners);
//# sourceMappingURL=Runners.entity.js.map