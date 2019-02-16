import { Command } from "@oclif/command";
import Client from "./Client";
export declare abstract class BaseCommand extends Command {
    client: Client;
    fetchCredentials(): Promise<any>;
    constructor(...args: any[]);
    auth(): Promise<void>;
    prompt<Opt extends string, Req extends string>(optional: Array<Opt>, required: Array<Req>): Promise<{ [K in Req]: string; } & { [K in Opt]?: string | undefined; }>;
    params<T extends {}, Req extends keyof T & string, Opt extends keyof T & string>(flags: T, optional: Array<Opt>, required: Array<Req>): Promise<Pick<T, Exclude<keyof T, Req | Opt>> & { [K in Req]: string; } & { [K in Opt]?: string | undefined; }>;
}
