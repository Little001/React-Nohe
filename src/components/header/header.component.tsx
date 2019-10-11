import { observer, inject } from "mobx-react";
import * as React from "react";
import i18n from "../../locales/i18";
import { SessionStore } from "../../stores/session.store";
import { withTranslation, WithTranslation } from "react-i18next";

interface IHeaderProps {
    sessionStore?: SessionStore;
}

@inject("sessionStore")
@observer
export class NoheHeader extends React.Component<IHeaderProps & WithTranslation> {
    changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    LogoutButton() {
        const { t } = this.props;
        const isLoggedIn = this.props.sessionStore!.isLogged();
        if (isLoggedIn) {
            return <button onClick={() => this.props.sessionStore!.logout()}>{t("logout")}</button>;
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