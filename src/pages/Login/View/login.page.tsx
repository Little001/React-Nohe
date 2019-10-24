import { observer, inject } from "mobx-react";
import * as React from "react";
import { LoginController } from "../Controllers/login.controller";
import { NoheTextBox, TextBoxType } from "../../../components/textBox/textBox.component";
import { NoheButton } from "../../../components/button/button.component";
import { withTranslation, WithTranslation } from "react-i18next";
import { IAppProvider } from "../../../stores/app.provider";

interface ILoginPageProps {
    controller: LoginController;
}

@inject("appProvider")
@observer
class LoginPage extends React.Component<WithTranslation & IAppProvider & ILoginPageProps> {
    private controller = this.props.controller;

    render() {
        const { t } = this.props;

        return (
            <div>
                <NoheTextBox
                    type = {TextBoxType.Text}
                    placeholder = {t("username")}
                    value = {this.controller.getUserName()}
                    onChange = {(value) => {
                        this.controller.setUsername(value);
                    }} />
                <NoheTextBox
                    type = {TextBoxType.Password} 
                    placeholder = {t("password")}
                    value = {this.controller.getPassword()}
                    onChange = {(value) => {
                        this.controller.setPassword(value);
                    }} />
                <NoheButton 
                    text={t("login")}
                    onClick = {() => {
                        this.controller.login();
                    }} />
            </div>
        );
    }
}

export default withTranslation()(LoginPage);