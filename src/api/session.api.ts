import Api from "./api";

export class SessionAPI {
    private api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    public async getToken(username: string, password: string) {
        return this.api.get("token", {
            field: "token",
            params: {
                username: username,
                password: password
            }
        });
    }

    public async post(username: string, password: string) {
        return this.api.post("token", {
            username: username,
            password: password
        });
    }
}
