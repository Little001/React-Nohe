import { inject, observer } from "mobx-react";
import * as React from "react";
import { SessionStore } from "../../../globalStores/session.store";
import { loginController as controller } from "../Controllers/login.controller";
import { Input } from "../../../components/input/input.component";
import { Button } from "../../../components/button/button.component";
import { translate } from "../../../locales/i18n";

interface ILoginPageProps {
    sessionStore: SessionStore;
}

@inject("sessionStore")
@observer
export class LoginPage extends React.Component<ILoginPageProps> {
    onFormSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        this.props.sessionStore.login(controller.getStore());
    }

    onUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
        controller.setUserName(event.currentTarget.value);
    }

    onPasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
        controller.setPassword(event.currentTarget.value);
    }

    render() {
        return (
            <div>
                {translate("loading")}
                <label>
                    {"username"}
                    <Input value={controller.getUserName()} onChange={this.onUsernameChange} />
                </label>
                <label>
                    {"password"}
                    <Input value={controller.getPassword()} onChange={this.onPasswordChange} />
                </label>
                <Button text="Submit" onClick={this.onFormSubmit}/>
            </div>
        );
    }
}
