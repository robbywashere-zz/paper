
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../../BaseCommand";

  export default class ScriptsDestroy extends BaseCommand {
    static description = "Destroys the starup script with the given id"
    static flags = {  
    "scriptId": flags.string({
      description: "The id of the script to destroy",
      required: true, 
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(ScriptsDestroy).flags,[], [], []
      );
      return this.client.ScriptsDestroy(params);
    }
  }