import Api from "@paper/paper-api";
export default class Client extends Api {
    login({ email, password }: {
        email: string;
        password: string;
    }): Promise<void>;
}
