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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const common_1 = require("@nestjs/common");
const auth_entity_1 = require("./Entities/auth.entity");
const graphql_1 = require("@nestjs/graphql");
const auth_app_1 = require("../../app/auth.app");
let AuthResolver = class AuthResolver {
    authApp;
    constructor(authApp) {
        this.authApp = authApp;
    }
    async Auth(ctx) {
        const authHeader = ctx.req.headers.authorization;
        if (!authHeader?.startsWith('Bearer ')) {
            throw new common_1.UnauthorizedException('Missing Authorization header');
        }
        const token = authHeader.replace('Bearer ', '');
        return this.authApp.userAuthentication(token);
    }
    async EmailCheck(email) {
        return this.authApp.userEmail(email);
    }
    async generateCode(to) {
        return this.authApp.generateUserCode(to);
    }
};
exports.AuthResolver = AuthResolver;
__decorate([
    (0, graphql_1.Query)(() => auth_entity_1.AuthValidation),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "Auth", null);
__decorate([
    (0, graphql_1.Query)(() => auth_entity_1.Email),
    __param(0, (0, graphql_1.Args)('email', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "EmailCheck", null);
__decorate([
    (0, graphql_1.Query)(() => auth_entity_1.ActionResponse),
    __param(0, (0, graphql_1.Args)('to', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "generateCode", null);
exports.AuthResolver = AuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [auth_app_1.AuthApp])
], AuthResolver);
//# sourceMappingURL=auth.resolver.js.map