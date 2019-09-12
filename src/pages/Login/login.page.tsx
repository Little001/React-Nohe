import { inject, observer } from "mobx-react";
import * as React from "react";
import { i18n } from "../../locales/i18n";
import { AuthenticationState, SessionStore } from "../../stores/session.store";
import { translate } from "../../utils/translate";
import { loginController as controller } from "./Controllers/loginController";

const t = translate(["login"]);

interface ILoginPageProps {
    sessionStore: SessionStore;
}

@inject("sessionStore")
@observer
export class LoginPage extends React.Component<ILoginPageProps> {

  onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      this.props.sessionStore.login(controller.getModel().username, controller.getModel().password);
  }

  onUsernameChange(event: React.FormEvent<HTMLInputElement>) {
      controller.setUserName(event.currentTarget.value);
  }

  onPasswordChange(event: React.FormEvent<HTMLInputElement>) {
    controller.setPassword(event.currentTarget.value);
  }

  onLanguageChange(event: React.FormEvent<HTMLSelectElement>) {
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
        <label>
            {t("username")}
            <input value={controller.getModel().username} onChange={this.onUsernameChange} />
        </label>
        <label>
            {t("password")}
            <input value={controller.getModel().password} onChange={this.onPasswordChange} />
        </label>
        <button type="submit">
              {this.props.sessionStore.authenticationState === AuthenticationState.pending
                ? t("loading")
                : t("submit")}
        </button>
      </form>
    );
  }
}
