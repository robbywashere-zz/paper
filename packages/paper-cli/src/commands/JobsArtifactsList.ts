
  import {  flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class JobsArtifactsList extends BaseCommand {
    static flags = {  
    "jobId": flags.string({
      description: "Id of the job to list artifacts for",
      required: true,  
    }), 
    "files": flags.string({
      description: "Optional; wildcard expression of file(s) to list, e.g., \"myfiles*\".  Note: if you include a wildcard you must double-quote the files argument.",
      required: undefined,  
    }), 
    "size": flags.boolean({
      description: "Optional; include file size in bytes.  '--size' with no value is equivalent to true.",
      required: undefined,  
    }), 
    "links": flags.boolean({
      description: "Optional; include https links to artifacts.  Note: links are only valid for 8 hours. '--links' with no value is equivalent to true.",
      required: undefined,  
    }), 
    "json": flags.boolean({
      description: "Optional; return JSON object instead of writing to standard out.  '--json' with no value is equivalent to true.",
      required: undefined,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(JobsArtifactsList).flags, [], []
      );
      return this.client.JobsArtifactsList(params);
    }
  }