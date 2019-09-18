import { loginController } from "../../../pages/Login/Controllers/loginController";

describe("Login Controller", () => {

    it("Set username", () => {
        loginController.setUserName("Merynek");
        expect(loginController.getModel().username).toBe("Merynek");
    });

    it("Set password", () => {
        loginController.setPassword("Password");
        expect(loginController.getModel().password).toBe("Password");
    });
});
