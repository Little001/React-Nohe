import { LoginController } from "../../../pages/Login/Controllers/login.controller";
import { CreateSessionStore } from "../../tools/helper";

describe("Login Controller", () => {
    let controller: LoginController;

    beforeEach(() => {
        controller = new LoginController(CreateSessionStore());
    })

    it("SET / GET fields", () => {
        controller.setUsername("Merynek");
        expect(controller.getUserName()).toBe("Merynek");

        controller.setPassword("Password");
        expect(controller.getPassword()).toBe("Password");

        expect(controller.getStore()).toEqual({
            username: "Merynek",
            password: "Password"
        })
    });

    it("Is valid", () => {
        expect(controller.isValid()).toBeFalsy();

        controller.setUsername("Username");
        expect(controller.isValid()).toBeFalsy();

        controller.setPassword("Password");
        expect(controller.isValid()).toBeTruthy();
    });
});
