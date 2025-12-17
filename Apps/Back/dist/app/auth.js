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
exports.AuthApp = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../Graphql/Auth/auth.service");
let AuthApp = class AuthApp {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async userAuthentication(email, password) {
        let userAuthentication = {};
        try {
            userAuthentication = this.authService.GetUserAuth(email, password);
            return userAuthentication;
        }
        catch (erro) {
            common_1.Logger.log('Erro authenticating user, check credentials');
            return {};
        }
    }
};
exports.AuthApp = AuthApp;
exports.AuthApp = AuthApp = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthApp);
//# sourceMappingURL=auth.js.map