import { loginController } from "../../../pages/Login/Controllers/login.controller";

describe("Login Controller", () => {

    it("SET / GET Username", () => {
        loginController.setUserName("Merynek");
        expect(loginController.getUserName()).toBe("Merynek");
    });

    it("SET / GET Password", () => {
        loginController.setPassword("Password");
        expect(loginController.getPassword()).toBe("Password");
    });

    it("Login store", () => {
        loginController.setUserName("Username");
        loginController.setPassword("Password");

        expect(loginController.getStore()).toEqual({
            username: "Username",
            password: "Password"
        })
    });

    it("Is valid", () => {
        loginController.setUserName("");
        loginController.setPassword("");
        expect(loginController.isValid()).toBeFalsy();

        loginController.setUserName("Username");
        loginController.setPassword("");
        expect(loginController.isValid()).toBeFalsy();

        loginController.setUserName("");
        loginController.setPassword("Password");
        expect(loginController.isValid()).toBeFalsy();

        loginController.setUserName("Username");
        loginController.setPassword("Password");
        expect(loginController.isValid()).toBeTruthy();
    });
});
