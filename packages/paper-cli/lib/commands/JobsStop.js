"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class JobsStop extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(JobsStop).flags, [], []);
        return this.client.JobsStop(params);
    }
}
JobsStop.flags = {
    "jobId": command_1.flags.string({
        description: "Id of the job to shut down",
        required: true,
    }),
};
exports.default = JobsStop;
