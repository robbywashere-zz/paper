"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class JobsLogs extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(JobsLogs).flags, [], []);
        return this.client.JobsLogs(params);
    }
}
JobsLogs.flags = {
    "jobId": command_1.flags.string({
        description: "Id of the job to logs",
        required: true,
    }),
    "tail": command_1.flags.boolean({
        description: "Optional; if tail is specified logs will be streamed until the job stops.",
        required: undefined,
    }),
    "line": command_1.flags.integer({
        description: "Optional; if line is specified logs only logs after that line will be returned (up to limit).",
        required: undefined,
    }),
    "limit": command_1.flags.integer({
        description: "Optional; number of log lines to retrieve on each request; default limit is 2000.",
        required: undefined,
    }),
    "json": command_1.flags.boolean({
        description: "Optional; return JSON object instead of writing to standard out.  '--json' with no value is equivalent to true.",
        required: undefined,
    }),
};
exports.default = JobsLogs;
