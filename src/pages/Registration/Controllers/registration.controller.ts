import RegistrationStore from "../Stores/registration.store";
import { UserAPI } from "../../../api/user.api";

export default class RegistrationController {
    private store: RegistrationStore;
    private api: UserAPI;

    constructor(userApi: UserAPI) {
        this.store = new RegistrationStore();
        this.api = userApi;
    }

    public setEmail(email: string): void {
        this.store.email = email;
    }

    public getEmail(): string {
        return this.store.email;
    }

    public setUsername(username: string): void {
        this.store.username = username;
    }

    public getUserName(): string {
        return this.store.username;
    }

    public setPassword(password: string): void {
        this.store.password = password;
    }

    public getPassword(): string {
        return this.store.password;
    }

    public setRetypePassword(retypePassword: string): void {
        this.store.retypePassword = retypePassword;
    }

    public getRetypePassword(): string {
        return this.store.retypePassword;
    }

    public getStore(): RegistrationStore {
        return this.store;
    }

    public isValid(): boolean {
        return Boolean(this.getEmail()) && 
            Boolean(this.getUserName()) &&
            Boolean(this.getPassword()) &&
            Boolean(this.getRetypePassword()) &&
            this.emailIsValid();
    }

    public registration() {
        if (this.isValid()) {
            this.api.registration(this.getStore());
        }
    }

    private emailIsValid(): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.store.email);
    }
}
