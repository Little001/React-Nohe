import { observer } from "mobx-react";
import * as React from "react";
import RegistrationController from "../Controllers/registration.controller";
import { Input } from "../../../components/input/input.component";
import { Button } from "../../../components/button/button.component";

@observer
export class RegistrationPage extends React.Component {
    private controller = new RegistrationController();

    handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        this.controller.registration();
    }

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;

        switch(event.currentTarget.name) {
        case "email": 
            this.controller.setEmail(value);
            break;
        case "username": 
            this.controller.setUsername(value);
            break;
        case "password": 
            this.controller.setPassword(value);
            break;
        case "retypePassword": 
            this.controller.setRetypePassword(value);
            break;
        }
        this.controller.setRetypePassword(event.currentTarget.value);
    }

    render() {
        return (
            <div>
                {/* TODO: add LocalizationStore */}
                <label>
                    {"email"}
                    <Input value={this.controller.getEmail()} name="email" onChange={this.handleChange} />
                </label>
                <label>
                    {"username"}
                    <Input value={this.controller.getUserName()} name="username" onChange={this.handleChange} />
                </label>
                <label>
                    {"password"}
                    <Input type="password" value={this.controller.getPassword()} name="password" onChange={this.handleChange} />
                </label>
                <label>
                    {"retypePassword"}
                    <Input type="password" value={this.controller.getRetypePassword()} name="retypePassword" onChange={this.handleChange} />
                </label>
                <Button onClick={this.handleClick} text="Registration" />
            </div>
        );
    }
}
