import { boolean } from "@oclif/parser/lib/flags";

export type SwagDef = {
  Types: string[];
  Methods: SwagDefMethod[];
  ClassName: string;
  Server: string;
};
export type SwagParam = {
  name: string;
  required?: boolean;
  type: "boolean" | "string" | "number" | string;
  description?: string;
  enum?: string[];
  "x-cli-prompt"?: boolean;
  schema: {
    [key: string]: any;
    type: "boolean" | "string" | "number" | string;
  };
};
export type SwagDefMethod = {
  OpId: string;
  AllParams: SwagParam[];
  CliParams: SwagParam[];
  BodyParams: string[];
  PathParams: string[];
  QueryParams: string[];
  ParamsTyped: string;
  RequiredParams: string[];
  Method: string;
  SkipAuth: boolean;
  Description?: string;
  Topic: string;
  SubCommand: string;
  Filename: string;
  Path: string;
};
export type SwaggerSpec = {
  host: string;
  basePath: string;
  schemes: string[];
  paths: {
    [key: string]: {
      [key: string]: {
        "x-cli-parameters"?: SwagParam[];
        "x-skip-auth"?: boolean;
        parameters: {
          name: string;
          type: "boolean" | "string" | "number" | "object" | string;
          in: "path" | "query" | "body";
          schema: {
            $ref?: string;
          };
          required: string[];
        }[];
        summary: string;
        operationId: string;
        responses: {
          $ref?: string;
        }[];
      };
    };
  };
};
