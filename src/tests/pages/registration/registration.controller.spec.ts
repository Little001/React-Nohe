
import { RegistrationController } from "../../../pages/Registration/Controllers/registration.controller";
import { CreateUserApi } from "../../tools/helper";

describe("Registration Controller", () => {
    let controller: RegistrationController;

    beforeEach(() => {
        controller = new RegistrationController(CreateUserApi());
    })

    it("SET / GET fields", () => {
        controller.setUsername("Merynek");
        expect(controller.getUserName()).toBe("Merynek");

        controller.setEmail("email@gmail.com");
        expect(controller.getEmail()).toBe("email@gmail.com");

        controller.setPassword("password");
        expect(controller.getPassword()).toBe("password");

        controller.setRetypePassword("reTypePassword");
        expect(controller.getRetypePassword()).toBe("reTypePassword");

        expect(controller.getStore()).toEqual({
            username: "Merynek",
            email: "email@gmail.com",
            password: "password",
            retypePassword: "reTypePassword"
        })
    });

    it("Is valid", () => {
        expect(controller.isValid()).toBeFalsy();

        controller.setUsername("Username");
        expect(controller.isValid()).toBeFalsy();

        controller.setPassword("Password");
        expect(controller.isValid()).toBeFalsy();

        controller.setRetypePassword("reTypePassword");
        expect(controller.isValid()).toBeFalsy();

        controller.setEmail("invalidEmail");
        expect(controller.isValid()).toBeFalsy();

        controller.setEmail("email@gmail.com");
        expect(controller.isValid()).toBeTruthy();
    });

});
