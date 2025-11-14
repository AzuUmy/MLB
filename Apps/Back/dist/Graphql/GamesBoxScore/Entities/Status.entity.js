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
exports.Status = void 0;
const graphql_1 = require("@nestjs/graphql");
(0, graphql_1.ObjectType)();
class Status {
    preferred_name;
    first_name;
    last_name;
    jersey_number;
    status;
    position;
    primary_position;
    id;
    win;
    loss;
    save;
    hold;
    blown_save;
    full_name;
}
exports.Status = Status;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Status.prototype, "preferred_name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Status.prototype, "first_name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Status.prototype, "last_name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Status.prototype, "jersey_number", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Status.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Status.prototype, "position", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Status.prototype, "primary_position", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Status.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Status.prototype, "win", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Status.prototype, "loss", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Status.prototype, "save", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Status.prototype, "hold", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Status.prototype, "blown_save", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Status.prototype, "full_name", void 0);
//# sourceMappingURL=Status.entity.js.map