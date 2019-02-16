
  import {  flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class LoginUser extends BaseCommand {
    static flags = {  
    "apiToken": flags.string({
      description: "Optional name of an existing API token for the user's account",
      required: undefined,  
    }), 
    "email": flags.string({
      description: "Email address of the paperspace user to log in",
      required: true,  
    }), 
    "password": flags.boolean({
      description: "Password for the specified email address",
      required: true,  
      hidden: true,
      default: true,
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(LoginUser).flags, [], ["password"]
      );
      return this.client.LoginUser(params);
    }
  }