"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FirebaseAdminService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseAdminService = void 0;
const common_1 = require("@nestjs/common");
const Firebase_admin_config_1 = require("./Firebase.admin.config");
const Firebase_config_1 = require("./Firebase.config");
let FirebaseAdminService = FirebaseAdminService_1 = class FirebaseAdminService {
    logger = new common_1.Logger(FirebaseAdminService_1.name);
    onModuleInit() {
        this.logger.log('FirebaseAdminService loaded and ready');
    }
    async verifyToken(idToken) {
        return Firebase_admin_config_1.adminAuth.verifyIdToken(idToken);
    }
    async createUser(email, password) {
        return Firebase_admin_config_1.adminAuth.createUser({ email, password });
    }
    async loginWithEmailAndPassword(email, password) {
        return signInWithEmailAndPassword(Firebase_config_1.auth, email, password);
    }
    async getUser(uid) {
        return Firebase_admin_config_1.adminAuth.getUser(uid);
    }
};
exports.FirebaseAdminService = FirebaseAdminService;
exports.FirebaseAdminService = FirebaseAdminService = FirebaseAdminService_1 = __decorate([
    (0, common_1.Injectable)()
], FirebaseAdminService);
//# sourceMappingURL=Firebase.service.js.map