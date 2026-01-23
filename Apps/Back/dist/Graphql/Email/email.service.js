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
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const send_pulse_service_1 = require("../../services/sendpulse/send-pulse.service");
const render_template_1 = require("../../templates/render.template");
let EmailService = class EmailService {
    sendPulseService;
    constructor(sendPulseService) {
        this.sendPulseService = sendPulseService;
    }
    async sendCodeEmail(to, code) {
        const html = (0, render_template_1.renderTemplate)('code_email.template', {
            code,
            loginUrl: 'https://yourdomain.com/login',
        });
        return this.sendPulseService.sendEmail(to, 'Your Login Code', html, `Your login code is: ${code}`);
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [send_pulse_service_1.sendPulseService])
], EmailService);
//# sourceMappingURL=email.service.js.map