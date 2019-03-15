
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../../BaseCommand";

  export default class JobsLogs extends BaseCommand {
    static description = "Stream the logs for the job with the given id, while the job is running or after it has stopped"
    static flags = {  
    "json": flags.boolean({
      description: "Optional; return JSON object instead of writing to standard out.  '--json' with no value is equivalent to true.",
       
    }), 
    "jobId": flags.string({
      description: "Id of the job to logs",
      required: true, 
    }), 
    "tail": flags.boolean({
      description: "Optional; if tail is specified logs will be streamed until the job stops.",
       
    }), 
    "line": flags.integer({
      description: "Optional; if line is specified logs only logs after that line will be returned (up to limit).",
       
    }), 
    "limit": flags.integer({
      description: "Optional; number of log lines to retrieve on each request; default limit is 2000.",
       
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(JobsLogs).flags,[], [], []
      );
      return this.client.JobsLogs(params);
    }
  }