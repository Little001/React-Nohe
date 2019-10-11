import { observer, inject } from "mobx-react";
import * as React from "react";
import { LoginController } from "../Controllers/login.controller";
import { NoheTextBox, TextBoxType } from "../../../components/textBox/textBox.component";
import { NoheButton } from "../../../components/button/button.component";
import { withTranslation, WithTranslation } from "react-i18next";
import { SessionStore } from "../../../globalStores/session.store";

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
                {t("login")}
                <label>
                    {"username"}
                    <NoheTextBox
                        type = {TextBoxType.Text}
                        value = {this.controller.getUserName()}
                        onChange = {(value) => {
                            this.controller.setUsername(value);
                        }} 
                    />
                </label>
                <label>
                    {"password"}
                    <NoheTextBox
                        type = {TextBoxType.Text} 
                        value = {this.controller.getPassword()}
                        onChange = {(value) => {
                            this.controller.setPassword(value);
                        }}
                    />
                </label>
                <NoheButton 
                    text="Submit"
                    onClick = {() => {
                        this.controller.login();
                    }}
                />
            </div>
        );
    }
}

export default withTranslation()(LoginPage);