import { observer, inject } from "mobx-react";
import * as React from "react";
import { LoginController } from "../Controllers/login.controller";
import { NoheTextBox } from "../../../components/input/input.component";
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

    onFormSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        this.controller.login();
    }

    onUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.controller.setUserName(event.currentTarget.value);
    }

    onPasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.controller.setPassword(event.currentTarget.value);
    }

    render() {
        const { t } = this.props;

        return (
            <div>
                {t("login")}
                <label>
                    {"username"}
                    <NoheTextBox value={this.controller.getUserName()} onChange={this.onUsernameChange} />
                </label>
                <label>
                    {"password"}
                    <NoheTextBox value={this.controller.getPassword()} onChange={this.onPasswordChange} />
                </label>
                <NoheButton text="Submit" onClick={this.onFormSubmit}/>
            </div>
        );
    }
}

export default withTranslation()(LoginPage);