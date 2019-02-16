
  import {  flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class JobsLogs extends BaseCommand {
    static flags = {  
    "jobId": flags.string({
      description: "Id of the job to logs",
      required: true,  
    }), 
    "tail": flags.boolean({
      description: "Optional; if tail is specified logs will be streamed until the job stops.",
      required: undefined,  
    }), 
    "line": flags.integer({
      description: "Optional; if line is specified logs only logs after that line will be returned (up to limit).",
      required: undefined,  
    }), 
    "limit": flags.integer({
      description: "Optional; number of log lines to retrieve on each request; default limit is 2000.",
      required: undefined,  
    }), 
    "json": flags.boolean({
      description: "Optional; return JSON object instead of writing to standard out.  '--json' with no value is equivalent to true.",
      required: undefined,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(JobsLogs).flags, [], []
      );
      return this.client.JobsLogs(params);
    }
  }