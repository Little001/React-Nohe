import Api from "./base/api";
import RegistrationStore from "../pages/Registration/Stores/registration.store";

interface ITokenResponse {
    value: string;
}

export class UserAPI {
    private api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    public async getToken() {
        return this.api.get("token").then((response) => {
            return this.createToken(response.data);
        });
    }

    private createToken(data: ITokenResponse) {
        return data.value;
    }

    public async registration(registrationStore: RegistrationStore) {
        return this.api.post("registration", registrationStore);
    }
}
