
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../../BaseCommand";

  export default class ScriptsList extends BaseCommand {
    static description = "List information about all scripts assigned to either the current authenticated user or the team, if the user belongs to a team"
    static flags = {  
    "id": flags.string({
      description: "Optional script id to match on",
       
    }), 
    "ownerType": flags.string({
      description: "Optional ownerType to match on, either 'user' or 'team'",
       
    }), 
    "ownerId": flags.string({
      description: "Optional ownerId to match on, either a userId or teamId",
       
    }), 
    "name": flags.string({
      description: "Optional name to match on",
       
    }), 
    "description": flags.string({
      description: "Optional description to match on",
       
    }), 
    "dtCreated": flags.string({
      description: "Optional datetime created value to match on",
       
    }), 
    "isEnabled": flags.boolean({
      description: "Optional isEnabled value to match on, either true or false",
       
    }), 
    "runOnce": flags.boolean({
      description: "Optional runOnce value to match on, either true or false",
       
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(ScriptsList).flags,[], [], []
      );
      return this.client.ScriptsList(params);
    }
  }