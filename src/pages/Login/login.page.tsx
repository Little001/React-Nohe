import { inject, observer } from "mobx-react";
import * as React from "react";
import { AuthenticationState, SessionStore } from "../../stores/session.store";
import { loginController as controller } from "./Controllers/loginController";

interface ILoginPageProps {
    sessionStore: SessionStore;
}

@inject("sessionStore")
@observer
export class LoginPage extends React.Component<ILoginPageProps> {
    private onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.sessionStore.login(controller.getModel().username, controller.getModel().password);
    }

    private onUsernameChange(event: React.FormEvent<HTMLInputElement>) {
        controller.setUserName(event.currentTarget.value);
    }

    private onPasswordChange(event: React.FormEvent<HTMLInputElement>) {
        controller.setPassword(event.currentTarget.value);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                {/* TODO: add LocalizationStore */}
                <label>
                    {"username"}
                    <input value={controller.getModel().username} onChange={this.onUsernameChange} />
                </label>
                <label>
                    {"password"}
                    <input value={controller.getModel().password} onChange={this.onPasswordChange} />
                </label>
                <button type="submit">
                    {this.props.sessionStore.authenticationState === AuthenticationState.pending
                        ? "loading"
                        : "submit"}
                </button>
            </form>
        );
    }
}
