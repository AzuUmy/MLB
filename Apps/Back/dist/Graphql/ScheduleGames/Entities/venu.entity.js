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
exports.Venue = void 0;
// graphql/entities/venue.entity.ts
const graphql_1 = require("@nestjs/graphql");
const location_entity_1 = require("./location.entity");
let Venue = class Venue {
    name;
    market;
    capacity;
    surface;
    address;
    city;
    state;
    zip;
    country;
    id;
    field_orientation;
    stadium_type;
    time_zone;
    location;
};
exports.Venue = Venue;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Venue.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Venue.prototype, "market", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Venue.prototype, "capacity", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Venue.prototype, "surface", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Venue.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Venue.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Venue.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Venue.prototype, "zip", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Venue.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Venue.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Venue.prototype, "field_orientation", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Venue.prototype, "stadium_type", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Venue.prototype, "time_zone", void 0);
__decorate([
    (0, graphql_1.Field)(() => location_entity_1.Location, { nullable: true }),
    __metadata("design:type", Object)
], Venue.prototype, "location", void 0);
exports.Venue = Venue = __decorate([
    (0, graphql_1.ObjectType)()
], Venue);
//# sourceMappingURL=venu.entity.js.map