"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class JobsArtifactsList extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(JobsArtifactsList).flags, [], []);
        return this.client.JobsArtifactsList(params);
    }
}
JobsArtifactsList.flags = {
    "jobId": command_1.flags.string({
        description: "Id of the job to list artifacts for",
        required: true,
    }),
    "files": command_1.flags.string({
        description: "Optional; wildcard expression of file(s) to list, e.g., \"myfiles*\".  Note: if you include a wildcard you must double-quote the files argument.",
        required: undefined,
    }),
    "size": command_1.flags.boolean({
        description: "Optional; include file size in bytes.  '--size' with no value is equivalent to true.",
        required: undefined,
    }),
    "links": command_1.flags.boolean({
        description: "Optional; include https links to artifacts.  Note: links are only valid for 8 hours. '--links' with no value is equivalent to true.",
        required: undefined,
    }),
    "json": command_1.flags.boolean({
        description: "Optional; return JSON object instead of writing to standard out.  '--json' with no value is equivalent to true.",
        required: undefined,
    }),
};
exports.default = JobsArtifactsList;
