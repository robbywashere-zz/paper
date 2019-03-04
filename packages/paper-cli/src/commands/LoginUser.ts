
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class LoginUser extends BaseCommand {
    static description = "Logs in the user and acquires an api key"
    static flags = {  
    "email": flags.string({
      description: "Email address of the paperspace user to log in",
       
    }),} 
    async run() {
      
      const params = await this.params(
          this.parse(LoginUser).flags,[], ["password"], ["email"]
      );
      return this.client.LoginUser(params);
    }
  }