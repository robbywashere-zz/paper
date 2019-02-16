
  import {  flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class JobsWaitfor extends BaseCommand {
    static flags = {  
    "jobId": flags.string({
      description: "Id of the job to wait for",
      required: true,  
    }), 
    "state": flags.string({
      description: "Name of the state to wait for",
      required: true,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(JobsWaitfor).flags, [], []
      );
      return this.client.JobsWaitfor(params);
    }
  }