import Api from "./api";
import RegistrationStore from "../pages/Registration/Stores/registration.store";

export class UserAPI {
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

    public async registration(registrationStore: RegistrationStore) {
        return this.api.post("registration", registrationStore);
    }
}
