"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class MachinesAvailability extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(MachinesAvailability).flags, [], []);
        return this.client.MachinesAvailability(params);
    }
}
MachinesAvailability.flags = {
    "region": command_1.flags.string({
        description: "Name of the region: either 'East Coast (NY2)', 'West Coast (CA1)', or 'Europe (AMS1)'",
        required: true,
    }),
    "machineType": command_1.flags.string({
        description: "Machine type: either 'GPU+', 'P4000', 'P5000', 'P6000', or 'V100'<p>",
        required: true,
    }),
};
exports.default = MachinesAvailability;
