import { observer, inject } from "mobx-react";
import * as React from "react";
import i18n from "../../locales/i18";
import { withTranslation, WithTranslation } from "react-i18next";
import { IAppProvider } from "../../stores/app.provider";

@inject("appProvider")
@observer
export class NoheHeader extends React.Component<IAppProvider & WithTranslation> {
    changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    LogoutButton() {
        const { t } = this.props;
        const isLoggedIn = this.props.appProvider!.sessionStore.isLogged();
        if (isLoggedIn) {
            return <button onClick={() => this.props.appProvider!.sessionStore.logout()}>{t("logout")}</button>;
        }
        return <div />
    }

    render() {
        return (
            <header>
                <h1>Header</h1>
                <div>
                    <button onClick={() => this.changeLanguage("en")}>en</button>
                    <button onClick={() => this.changeLanguage("cz")}>cz</button>
                    {this.LogoutButton()}
                </div>
            </header>
        );
    }
}

export default withTranslation()(NoheHeader);