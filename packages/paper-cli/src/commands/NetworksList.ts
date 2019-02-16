
  import {  flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class NetworksList extends BaseCommand {
    static flags = {  
    "id": flags.string({
      description: "Optional network id to match on",
      required: undefined,  
    }), 
    "name": flags.string({
      description: "Optional name to match on",
      required: undefined,  
    }), 
    "region": flags.string({
      description: "Optional region to match on",
      required: undefined,  
    }), 
    "dtCreated": flags.string({
      description: "Optional datetime created value to match on",
      required: undefined,  
    }), 
    "network": flags.string({
      description: "Optional network to match on",
      required: undefined,  
    }), 
    "netmask": flags.string({
      description: "Optional netmask to match on",
      required: undefined,  
    }), 
    "teamId": flags.string({
      description: "Optional teamId to match on",
      required: undefined,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(NetworksList).flags, [], []
      );
      return this.client.NetworksList(params);
    }
  }