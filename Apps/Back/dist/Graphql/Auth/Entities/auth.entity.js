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
exports.Token = exports.Auth = exports.Email = void 0;
const graphql_1 = require("@nestjs/graphql");
let Email = class Email {
    email;
};
exports.Email = Email;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Email.prototype, "email", void 0);
exports.Email = Email = __decorate([
    (0, graphql_1.ObjectType)()
], Email);
let Auth = class Auth {
    token;
    email;
    lastLoginAt;
};
exports.Auth = Auth;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Auth.prototype, "token", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Auth.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Auth.prototype, "lastLoginAt", void 0);
exports.Auth = Auth = __decorate([
    (0, graphql_1.ObjectType)()
], Auth);
let Token = class Token {
    accessToken;
};
exports.Token = Token;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Token.prototype, "accessToken", void 0);
exports.Token = Token = __decorate([
    (0, graphql_1.ObjectType)()
], Token);
//# sourceMappingURL=auth.entity.js.map