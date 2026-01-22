"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeValidationService = void 0;
const common_1 = require("@nestjs/common");
let CodeValidationService = class CodeValidationService {
    generateRandomCode() {
        const code = Math.floor(100000 + Math.random() * 900000);
        return Promise.resolve(code);
    }
};
exports.CodeValidationService = CodeValidationService;
exports.CodeValidationService = CodeValidationService = __decorate([
    (0, common_1.Injectable)()
], CodeValidationService);
//# sourceMappingURL=codeGenerate.app.js.map