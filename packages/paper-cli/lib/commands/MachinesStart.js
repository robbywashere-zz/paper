"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class MachinesStart extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(MachinesStart).flags, [], []);
        return this.client.MachinesStart(params);
    }
}
MachinesStart.flags = {
    "machineId": command_1.flags.string({
        description: "Id of the machine to start",
        required: true,
    }),
};
exports.default = MachinesStart;
