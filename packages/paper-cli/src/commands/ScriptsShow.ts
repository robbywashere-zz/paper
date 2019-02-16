
  import {  flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class ScriptsShow extends BaseCommand {
    static flags = {  
    "scriptId": flags.string({
      description: "Id of the script to show",
      required: true,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(ScriptsShow).flags, [], []
      );
      return this.client.ScriptsShow(params);
    }
  }