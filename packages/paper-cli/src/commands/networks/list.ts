
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../../BaseCommand";

  export default class NetworksList extends BaseCommand {
    static description = "List information about all networks available to either the current authenticated user or the team, if the user belongs to a team"
    static flags = {  
    "id": flags.string({
      description: "Optional network id to match on",
       
    }), 
    "name": flags.string({
      description: "Optional name to match on",
       
    }), 
    "region": flags.string({
      description: "Optional region to match on",
       
    }), 
    "dtCreated": flags.string({
      description: "Optional datetime created value to match on",
       
    }), 
    "network": flags.string({
      description: "Optional network to match on",
       
    }), 
    "netmask": flags.string({
      description: "Optional netmask to match on",
       
    }), 
    "teamId": flags.string({
      description: "Optional teamId to match on",
       
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(NetworksList).flags,[], [], []
      );
      return this.client.NetworksList(params);
    }
  }