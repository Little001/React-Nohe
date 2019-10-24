import { observer, inject } from "mobx-react";
import * as React from "react";
import { RegistrationController } from "../Controllers/registration.controller";
import { NoheTextBox, TextBoxType } from "../../../components/textBox/textBox.component";
import { NoheButton } from "../../../components/button/button.component";
import { withTranslation, WithTranslation } from "react-i18next";
import { IAppProvider } from "../../../stores/app.provider";

interface IRegistrationPageProps {
    controller: RegistrationController;
}

@inject("appProvider")
@observer
class RegistrationPage extends React.Component<WithTranslation & IAppProvider & IRegistrationPageProps> {
    private controller = this.props.controller;

    render() {
        const { t } = this.props;

        return (
            <div>
                <NoheTextBox
                    type = {TextBoxType.Text}
                    placeholder = {t("email")}
                    value = {this.controller.getEmail()}
                    onChange = {(value) => {
                        this.controller.setEmail(value)
                    }} />
                <NoheTextBox
                    type = {TextBoxType.Text}
                    placeholder = {t("email")}
                    value = {this.controller.getUserName()}
                    onChange = {(value) => {
                        this.controller.setUsername(value)
                    }} />
                <NoheTextBox 
                    type = {TextBoxType.Password}
                    placeholder = {t("password")}
                    value={this.controller.getPassword()}
                    onChange = {(value) => {
                        this.controller.setPassword(value)
                    }} />
                <NoheTextBox 
                    type = {TextBoxType.Password}
                    placeholder = {t("password")}
                    value = {this.controller.getRetypePassword()} 
                    onChange = {(value) => {
                        this.controller.setRetypePassword(value)
                    }} />
                <NoheButton
                    text = {t("registration")}
                    onClick = {() => {
                        this.controller.registration();
                    }} />
            </div>
        );
    }
}

export default withTranslation()(RegistrationPage);
