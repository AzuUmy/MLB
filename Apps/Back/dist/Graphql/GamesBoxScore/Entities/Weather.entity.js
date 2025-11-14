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
exports.Weather = void 0;
const graphql_1 = require("@nestjs/graphql");
const Weather_info_entity_1 = require("./Weather_info.entity");
let Weather = class Weather {
    forecast;
    current_conditions;
};
exports.Weather = Weather;
__decorate([
    (0, graphql_1.Field)(() => Weather_info_entity_1.WeatherInfo),
    __metadata("design:type", Weather_info_entity_1.WeatherInfo)
], Weather.prototype, "forecast", void 0);
__decorate([
    (0, graphql_1.Field)(() => Weather_info_entity_1.WeatherInfo),
    __metadata("design:type", Weather_info_entity_1.WeatherInfo)
], Weather.prototype, "current_conditions", void 0);
exports.Weather = Weather = __decorate([
    (0, graphql_1.ObjectType)()
], Weather);
//# sourceMappingURL=Weather.entity.js.map