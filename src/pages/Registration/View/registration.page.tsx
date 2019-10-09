import { observer, inject } from "mobx-react";
import * as React from "react";
import RegistrationController from "../Controllers/registration.controller";
import { NoheTextBox, TextBoxType } from "../../../components/textBox/textBox.component";
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

    render() {
        return (
            <div>
                <label>
                    {"email"}
                    <NoheTextBox
                        type = {TextBoxType.Text}
                        value = {this.controller.getEmail()}
                        onChange = {(value) => {
                            this.controller.setEmail(value)
                        }}
                    />
                </label>
                <label>
                    {"username"}
                    <NoheTextBox
                        type = {TextBoxType.Text}
                        value = {this.controller.getUserName()}
                        onChange = {(value) => {
                            this.controller.setUsername(value)
                        }}
                    />
                </label>
                <label>
                    {"password"}
                    <NoheTextBox 
                        type = {TextBoxType.Text}
                        value={this.controller.getPassword()}
                        onChange = {(value) => {
                            this.controller.setPassword(value)
                        }}
                    />
                </label>
                <label>
                    {"retypePassword"}
                    <NoheTextBox 
                        type = {TextBoxType.Password}
                        value = {this.controller.getRetypePassword()} 
                        onChange = {(value) => {
                            this.controller.setRetypePassword(value)
                        }}
                    />
                </label>
                <NoheButton
                    text = "Registration"
                    onClick = {() => {
                        this.controller.registration();
                    }}
                />
            </div>
        );
    }
}

export default withTranslation()(RegistrationPage);
