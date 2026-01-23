"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTemplate = renderTemplate;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
function renderTemplate(templateName, data) {
    const filePath = path_1.default.join(__dirname, `${templateName}.hbs`);
    if (!fs_1.default.existsSync(filePath)) {
        throw new Error(`Email template not found: ${filePath}`);
    }
    const source = fs_1.default.readFileSync(filePath, 'utf8');
    return handlebars_1.default.compile(source)(data);
}
//# sourceMappingURL=render.template.js.map