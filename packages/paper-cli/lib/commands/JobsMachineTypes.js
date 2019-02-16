"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class JobsMachineTypes extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(JobsMachineTypes).flags, [], []);
        return this.client.JobsMachineTypes(params);
    }
}
JobsMachineTypes.flags = {
    "region": command_1.flags.string({
        description: "Optional region to match on",
        required: undefined,
    }),
    "cluster": command_1.flags.string({
        description: "Optional cluster to match on",
        required: undefined,
    }),
    "machineType": command_1.flags.string({
        description: "Optional machine type to macth on",
        required: undefined,
    }),
    "isBusy": command_1.flags.boolean({
        description: "Optional busy status value to match on",
        required: undefined,
    }),
};
exports.default = JobsMachineTypes;
