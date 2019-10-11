import { SessionStore } from "../../stores/session.store";
import { createBrowserHistory } from "history";
import { CreateUserApi, CreateLocalStorate, CleanUp } from "../tools/helper";

describe("Session store", () => {
    it("Login / Logout", (done) => {
        let userApi = CreateUserApi();

        spyOn(userApi, "getToken").and.returnValue(Promise.resolve("tokenExample"));

        let sessionStore = new SessionStore(userApi, createBrowserHistory(), CreateLocalStorate());

        expect(sessionStore.isLogged()).toBeFalsy();
        sessionStore.login().then(() => {
            expect(sessionStore.isLogged()).toBeTruthy();
            expect(sessionStore.getToken()).toBe("tokenExample");

            sessionStore.logout();
            expect(sessionStore.isLogged()).toBeFalsy();
            expect(sessionStore.getToken()).toBeNull();
            done();
        });
    });

    afterEach(() => {
        CleanUp();
    })
});
