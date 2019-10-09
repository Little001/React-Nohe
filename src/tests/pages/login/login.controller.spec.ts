import { LoginController } from "../../../pages/Login/Controllers/login.controller";
import { CreateSessionStore } from "../../tools/helper";

describe("Login Controller", () => {
    let controller = new LoginController(CreateSessionStore());

    it("SET / GET Username", () => {
        controller.setUserName("Merynek");
        expect(controller.getUserName()).toBe("Merynek");
    });

    it("SET / GET Password", () => {
        controller.setPassword("Password");
        expect(controller.getPassword()).toBe("Password");
    });

    it("Login store", () => {
        controller.setUserName("Username");
        controller.setPassword("Password");

        expect(controller.getStore()).toEqual({
            username: "Username",
            password: "Password"
        })
    });

    it("Is valid", () => {
        controller.setUserName("");
        controller.setPassword("");
        expect(controller.isValid()).toBeFalsy();

        controller.setUserName("Username");
        controller.setPassword("");
        expect(controller.isValid()).toBeFalsy();

        controller.setUserName("");
        controller.setPassword("Password");
        expect(controller.isValid()).toBeFalsy();

        controller.setUserName("Username");
        controller.setPassword("Password");
        expect(controller.isValid()).toBeTruthy();
    });
});
