
  import {  flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class UsersList extends BaseCommand {
    static flags = {  
    "id": flags.string({
      description: "Optional user id to match on",
      required: undefined,  
    }), 
    "email": flags.string({
      description: "Optional email to match on",
      required: undefined,  
    }), 
    "firstname": flags.string({
      description: "Optional firstname to match on",
      required: undefined,  
    }), 
    "lastname": flags.string({
      description: "Optional lastname to match on",
      required: undefined,  
    }), 
    "dtCreated": flags.string({
      description: "Optional datetime created value to match on",
      required: undefined,  
    }), 
    "teamId": flags.string({
      description: "Optional teamId to match on",
      required: undefined,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(UsersList).flags, [], []
      );
      return this.client.UsersList(params);
    }
  }