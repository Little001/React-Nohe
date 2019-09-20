import Api from "./base/api";
import RegistrationStore from "../pages/Registration/Stores/registration.store";
import LoginStore from "../pages/Login/Stores/login.store";

export class UserAPI {
    private api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    public async getToken(loginStore: LoginStore) {
        return this.api.get("token", {
            field: "token",
            params: loginStore
        });
    }

    public async registration(registrationStore: RegistrationStore) {
        return this.api.post("registration", registrationStore);
    }
}
