
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class TemplatesList extends BaseCommand {
    static description = "List information about all templates available to either the current authenticated user or the team, if the user belongs to a team"
    static flags = {  
    "id": flags.string({
      description: "Optional template id to match on",
      required: false,  
    }), 
    "name": flags.string({
      description: "Optional name to match on",
      required: false,  
    }), 
    "label": flags.string({
      description: "Optional label to match on",
      required: false,  
    }), 
    "os": flags.string({
      description: "Optional os to match on",
      required: false,  
    }), 
    "dtCreated": flags.string({
      description: "Optional datetime created value to match on",
      required: false,  
    }), 
    "teamId": flags.string({
      description: "Optional teamId to match on",
      required: false,  
    }), 
    "userId": flags.string({
      description: "Optional userId to match on",
      required: false,  
    }), 
    "region": flags.string({
      description: "Optional region to match on",
      required: false,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(TemplatesList).flags, [], []
      );
      return this.client.TemplatesList(params);
    }
  }