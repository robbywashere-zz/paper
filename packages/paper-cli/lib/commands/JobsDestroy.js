"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class JobsDestroy extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(JobsDestroy).flags, [], []);
        return this.client.JobsDestroy(params);
    }
}
JobsDestroy.flags = {
    "jobId": command_1.flags.string({
        description: "The id of the job to destroy",
        required: true,
    }),
};
exports.default = JobsDestroy;
