import * as React from "react";
import i18n from "../../locales/i18";

export class Header extends React.Component {
    changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    render() {
        return (
            <header>
                <h1>Header</h1>
                <div>
                    <button onClick={() => this.changeLanguage("en")}>en</button>
                    <button onClick={() => this.changeLanguage("cz")}>cz</button>
                </div>
            </header>
        );
    }
}