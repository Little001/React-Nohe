import * as React from "react";
import { ValidationState } from "../components";

interface IButtonProps {
    text: string;
    disabled?: boolean;
    state?: ValidationState;
    onClick: () => void;
}

export class NoheButton extends React.Component<IButtonProps> {
    render() {
        return (
            <button
                onClick={() => {
                    this.props.onClick();
                }}
                disabled = {this.props.disabled}>
                {this.props.text}
            </button>
        );
    }
}
