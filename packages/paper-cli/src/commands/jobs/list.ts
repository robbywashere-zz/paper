
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../../BaseCommand";

  export default class JobsList extends BaseCommand {
    static description = "List information about all jobs available to either the current authenticated user or the team, if the user belongs to a team"
    static flags = {  
    "project": flags.string({
      description: "Optional project to match on.  If neither project nor projectId are provided, this is taken from the .ps_project/config.json file, or the current directory name.  Specify 'all' to list jobs for all projects associated with the user or team if the user is on a team.",
       
    }), 
    "projectId": flags.string({
      description: "Optional projectId to match on",
       
    }), 
    "name": flags.string({
      description: "Optional job name to match on",
       
    }), 
    "machineType": flags.string({
      description: "Optional machineType to match on",
       
    }), 
    "state": flags.string({
      description: "Optional state value to match on",
       
    }), 
    "container": flags.string({
      description: "Optional container to match on",
       
    }), 
    "command": flags.string({
      description: "Optional command to match on",
       
    }), 
    "workspace": flags.string({
      description: "Optional workspace path to match on.  Note: the original workspace path will be modified on upload to point to a temporary location.",
       
    }), 
    "dataset": flags.string({
      description: "Optional dataset to match on",
       
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(JobsList).flags,[], [], []
      );
      return this.client.JobsList(params);
    }
  }