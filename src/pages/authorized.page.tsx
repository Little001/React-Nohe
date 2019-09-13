import { inject } from "mobx-react";
import * as React from "react";
import { ThemeOption, ThemeStore } from "../stores/theme.store";
import { translate } from "../utils/translate";

const t = translate(["auth"]);

interface IAuthorizedPageProps {
  themeStore: ThemeStore;
}

@inject("themeStore")
export class AuthorizedPage extends React.Component<IAuthorizedPageProps> {
  changeToDarkTheme() {
    this.props.themeStore.changeTheme(ThemeOption.dark);
  }

  render() {
    return <input type="submit" onClick={this.changeToDarkTheme}>{t("toggleThemeToDark")}</input>;
  }
}
