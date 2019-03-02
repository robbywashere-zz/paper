
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class ScriptsText extends BaseCommand {
    static description = "Gets the text of the script with the given id"
    static flags = {  
    "scriptId": flags.string({
      description: "Id of the script to get text for",
      required: true, 
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(ScriptsText).flags,[], [], []
      );
      return this.client.ScriptsText(params);
    }
  }