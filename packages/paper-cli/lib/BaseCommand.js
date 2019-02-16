"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const command_1 = require("@oclif/command");
const Client_1 = tslib_1.__importDefault(require("./Client"));
const cli_ux_1 = tslib_1.__importDefault(require("cli-ux"));
class BaseCommand extends command_1.Command {
    constructor(...args) {
        super(args[0], args[1]);
        this.client = new Client_1.default();
    }
    async fetchCredentials() {
        return Object.create({
            email: await cli_ux_1.default.prompt("Email"),
            password: await cli_ux_1.default.prompt("Password", { type: "mask" })
        });
    }
    async auth() {
        return this.client.login(await this.fetchCredentials());
    }
    async prompt(optional, required) {
        let result = Object.create(null);
        for (let k of [...optional, ...required])
            result[k] = await cli_ux_1.default.prompt(k, { type: "mask" });
        return result;
    }
    async params(flags, optional, required) {
        const prompts = await this.prompt(optional.filter(k => flags[k]), required.filter(k => !flags[k]));
        for (let k of optional)
            delete flags[k];
        return Object.assign({}, flags, prompts);
    }
}
exports.BaseCommand = BaseCommand;
