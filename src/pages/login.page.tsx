import { action, observable } from "mobx";
import { inject, Observer } from "mobx-react";
import * as React from "react";
import { INPUTG } from "../components/input.component";
import { i18n } from "../locales/i18n";
import { AuthenticationState, SessionStore } from "../stores/session.store";
import { translate } from "../utils/translate";

const t = translate(["login"]);

interface ILoginPageProps {
  sessionStore: SessionStore;
}

@inject("sessionStore")
export class LoginPage extends React.Component<ILoginPageProps> {
  @observable localState = { username: "", password: ""};

  @action.bound
  async onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await this.props.sessionStore.login(this.localState.username, this.localState.password);
  }

  @action.bound
  onUsernameChange(event: React.FormEvent<HTMLInputElement>) {
    this.localState.username = event.currentTarget.value;
  }

  @action.bound
  onPasswordChange(event: React.FormEvent<HTMLInputElement>) {
    this.localState.password = event.currentTarget.value;
  }

  onLanguageChange = (event: React.FormEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.currentTarget.value, () => window.location.reload());
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {/* TODO: add LocalizationStore */}
        <select onChange={this.onLanguageChange} value={i18n.language}>
          <option value="en">en</option>
          <option value="uk">uk</option>
        </select>
        <Observer>
          {() => (
            <label>
              {t("username")}
              <INPUTG value={this.localState.username} onChange={this.onUsernameChange} />
            </label>
          )}
        </Observer>
        <Observer>
          {() => (
            <label>
              {t("password")}
              <INPUTG
                type="password"
                value={this.localState.password}
                onChange={this.onPasswordChange}
              />
            </label>
          )}
        </Observer>
        <Observer>
          {() => (
            <button type="submit">
              {this.props.sessionStore.authenticationState === AuthenticationState.pending
                ? t("loading")
                : t("submit")}
            </button>
          )}
        </Observer>
      </form>
    );
  }
}
