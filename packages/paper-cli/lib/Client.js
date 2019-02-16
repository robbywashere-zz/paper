"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const paper_api_1 = tslib_1.__importDefault(require("@paper/paper-api"));
console.log({ Api: paper_api_1.default });
class Client extends paper_api_1.default {
    async login({ email, password }) {
        const response = await this.LoginUser({ email, password });
        this.SetToken(response.body.key);
    }
}
exports.default = Client;
