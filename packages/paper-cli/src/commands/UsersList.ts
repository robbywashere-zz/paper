
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class UsersList extends BaseCommand {
    static description = "List information about all users available to either the current authenticated user or the team, if the user belongs to a team"
    static flags = {  
    "id": flags.string({
      description: "Optional user id to match on",
       
    }), 
    "email": flags.string({
      description: "Optional email to match on",
       
    }), 
    "firstname": flags.string({
      description: "Optional firstname to match on",
       
    }), 
    "lastname": flags.string({
      description: "Optional lastname to match on",
       
    }), 
    "dtCreated": flags.string({
      description: "Optional datetime created value to match on",
       
    }), 
    "teamId": flags.string({
      description: "Optional teamId to match on",
       
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(UsersList).flags,[], [], []
      );
      return this.client.UsersList(params);
    }
  }