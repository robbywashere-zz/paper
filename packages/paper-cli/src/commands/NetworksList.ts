
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class NetworksList extends BaseCommand {
    static description = "List information about all networks available to either the current authenticated user or the team, if the user belongs to a team"
    static flags = {  
    "id": flags.string({
      description: "Optional network id to match on",
      required: false,  
    }), 
    "name": flags.string({
      description: "Optional name to match on",
      required: false,  
    }), 
    "region": flags.string({
      description: "Optional region to match on",
      required: false,  
    }), 
    "dtCreated": flags.string({
      description: "Optional datetime created value to match on",
      required: false,  
    }), 
    "network": flags.string({
      description: "Optional network to match on",
      required: false,  
    }), 
    "netmask": flags.string({
      description: "Optional netmask to match on",
      required: false,  
    }), 
    "teamId": flags.string({
      description: "Optional teamId to match on",
      required: false,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(NetworksList).flags, [], []
      );
      return this.client.NetworksList(params);
    }
  }