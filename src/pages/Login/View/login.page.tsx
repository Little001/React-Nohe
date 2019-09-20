import { inject, observer } from "mobx-react";
import * as React from "react";
import { SessionStore } from "../../../globalStores/session.store";
import { loginController as controller } from "../Controllers/login.controller";

interface ILoginPageProps {
    sessionStore: SessionStore;
}

@inject("sessionStore")
@observer
export class LoginPage extends React.Component<ILoginPageProps> {
    onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
            <form onSubmit={this.onFormSubmit}>
                {/* TODO: add LocalizationStore */}
                <label>
                    {"username"}
                    <input value={controller.getUserName()} onChange={this.onUsernameChange} />
                </label>
                <label>
                    {"password"}
                    <input value={controller.getPassword()} onChange={this.onPasswordChange} />
                </label>
                <button type="submit">submit</button>
            </form>
        );
    }
}
