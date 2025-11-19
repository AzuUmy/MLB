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
exports.WeatherInfoSchema = exports.WeatherInfo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const wind_schema_1 = require("./wind.schema");
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
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], WeatherInfo.prototype, "temp_f", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WeatherInfo.prototype, "condition", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], WeatherInfo.prototype, "humidity", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], WeatherInfo.prototype, "dew_point_f", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], WeatherInfo.prototype, "cloud_cover", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WeatherInfo.prototype, "obs_time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: wind_schema_1.WindSchema }),
    __metadata("design:type", wind_schema_1.Wind)
], WeatherInfo.prototype, "wind", void 0);
exports.WeatherInfo = WeatherInfo = __decorate([
    (0, mongoose_1.Schema)()
], WeatherInfo);
exports.WeatherInfoSchema = mongoose_1.SchemaFactory.createForClass(WeatherInfo);
//# sourceMappingURL=weather_info.schema.js.map