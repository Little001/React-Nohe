import { observer, inject } from "mobx-react";
import * as React from "react";
import RegistrationController from "../Controllers/registration.controller";
import { NoheTextBox } from "../../../components/input/input.component";
import { NoheButton } from "../../../components/button/button.component";
import { UserAPI } from "../../../api/user.api";
import { withTranslation, WithTranslation } from "react-i18next";

interface IRegistrationPageProps {
    userApi?: UserAPI;
}

@inject("userApi")
@observer
class RegistrationPage extends React.Component<WithTranslation & IRegistrationPageProps> {
    private controller = new RegistrationController(this.props.userApi!);

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
                    <NoheTextBox value={this.controller.getEmail()} name="email" onChange={this.handleChange} />
                </label>
                <label>
                    {"username"}
                    <NoheTextBox value={this.controller.getUserName()} name="username" onChange={this.handleChange} />
                </label>
                <label>
                    {"password"}
                    <NoheTextBox type="password" value={this.controller.getPassword()} name="password" onChange={this.handleChange} />
                </label>
                <label>
                    {"retypePassword"}
                    <NoheTextBox type="password" value={this.controller.getRetypePassword()} name="retypePassword" onChange={this.handleChange} />
                </label>
                <NoheButton onClick={this.handleClick} text="Registration" />
            </div>
        );
    }
}

export default withTranslation()(RegistrationPage);
