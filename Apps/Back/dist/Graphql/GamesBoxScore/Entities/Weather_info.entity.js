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
exports.WeatherInfo = void 0;
const graphql_1 = require("@nestjs/graphql");
const Wind_entity_1 = require("./Wind.entity");
let WeatherInfo = class WeatherInfo {
    temp_f;
    condition;
    humidity;
    dew_point_f;
    cloud_cover;
    obs_time;
    wind;
};
exports.WeatherInfo = WeatherInfo;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], WeatherInfo.prototype, "temp_f", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WeatherInfo.prototype, "condition", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], WeatherInfo.prototype, "humidity", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], WeatherInfo.prototype, "dew_point_f", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], WeatherInfo.prototype, "cloud_cover", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WeatherInfo.prototype, "obs_time", void 0);
__decorate([
    (0, graphql_1.Field)(() => Wind_entity_1.Wind),
    __metadata("design:type", Wind_entity_1.Wind)
], WeatherInfo.prototype, "wind", void 0);
exports.WeatherInfo = WeatherInfo = __decorate([
    (0, graphql_1.ObjectType)()
], WeatherInfo);
//# sourceMappingURL=Weather_info.entity.js.map