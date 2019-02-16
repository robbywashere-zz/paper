
  import {  flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class JobsDestroy extends BaseCommand {
    static flags = {  
    "jobId": flags.string({
      description: "The id of the job to destroy",
      required: true,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(JobsDestroy).flags, [], []
      );
      return this.client.JobsDestroy(params);
    }
  }