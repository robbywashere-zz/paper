
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class TemplatesList extends BaseCommand {
    static description = "List information about all templates available to either the current authenticated user or the team, if the user belongs to a team"
    static flags = {  
    "id": flags.string({
      description: "Optional template id to match on",
       
    }), 
    "name": flags.string({
      description: "Optional name to match on",
       
    }), 
    "label": flags.string({
      description: "Optional label to match on",
       
    }), 
    "os": flags.string({
      description: "Optional os to match on",
       
    }), 
    "dtCreated": flags.string({
      description: "Optional datetime created value to match on",
       
    }), 
    "teamId": flags.string({
      description: "Optional teamId to match on",
       
    }), 
    "userId": flags.string({
      description: "Optional userId to match on",
       
    }), 
    "region": flags.string({
      description: "Optional region to match on",
       
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(TemplatesList).flags,[], [], []
      );
      return this.client.TemplatesList(params);
    }
  }