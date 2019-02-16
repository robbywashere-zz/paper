"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class MachinesUtilization extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(MachinesUtilization).flags, [], []);
        return this.client.MachinesUtilization(params);
    }
}
MachinesUtilization.flags = {
    "machineId": command_1.flags.string({
        description: "Id of the machine to get utilization data for",
        required: true,
    }),
    "billingMonth": command_1.flags.string({
        description: "Billing period to query in `YYYY-MM` format",
        required: true,
    }),
};
exports.default = MachinesUtilization;
