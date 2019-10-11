import { observer, inject } from "mobx-react";
import * as React from "react";
import { LoginController } from "../Controllers/login.controller";
import { NoheTextBox, TextBoxType } from "../../../components/textBox/textBox.component";
import { NoheButton } from "../../../components/button/button.component";
import { withTranslation, WithTranslation } from "react-i18next";
import { SessionStore } from "../../../stores/session.store";

interface ILoginPageProps {
    sessionStore?: SessionStore;
}

@inject("sessionStore")
@observer
class LoginPage extends React.Component<ILoginPageProps & WithTranslation> {
    private controller = new LoginController(this.props.sessionStore!);

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