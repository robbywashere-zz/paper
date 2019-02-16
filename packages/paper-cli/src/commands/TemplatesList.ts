
  import {  flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class TemplatesList extends BaseCommand {
    static flags = {  
    "id": flags.string({
      description: "Optional template id to match on",
      required: undefined,  
    }), 
    "name": flags.string({
      description: "Optional name to match on",
      required: undefined,  
    }), 
    "label": flags.string({
      description: "Optional label to match on",
      required: undefined,  
    }), 
    "os": flags.string({
      description: "Optional os to match on",
      required: undefined,  
    }), 
    "dtCreated": flags.string({
      description: "Optional datetime created value to match on",
      required: undefined,  
    }), 
    "teamId": flags.string({
      description: "Optional teamId to match on",
      required: undefined,  
    }), 
    "userId": flags.string({
      description: "Optional userId to match on",
      required: undefined,  
    }), 
    "region": flags.string({
      description: "Optional region to match on",
      required: undefined,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(TemplatesList).flags, [], []
      );
      return this.client.TemplatesList(params);
    }
  }