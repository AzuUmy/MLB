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
exports.WeatherSchema = exports.Weather = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const weather_info_schema_1 = require("./weather_info.schema");
let Weather = class Weather {
    forecast;
    current_conditions;
};
exports.Weather = Weather;
__decorate([
    (0, mongoose_1.Prop)({ type: weather_info_schema_1.WeatherInfoSchema }),
    __metadata("design:type", weather_info_schema_1.WeatherInfo)
], Weather.prototype, "forecast", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: weather_info_schema_1.WeatherInfoSchema }),
    __metadata("design:type", weather_info_schema_1.WeatherInfo)
], Weather.prototype, "current_conditions", void 0);
exports.Weather = Weather = __decorate([
    (0, mongoose_1.Schema)()
], Weather);
exports.WeatherSchema = mongoose_1.SchemaFactory.createForClass(Weather);
//# sourceMappingURL=weather.schema.js.map