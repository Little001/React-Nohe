import * as React from "react";
import { ValidationState } from "../components";

export enum TextBoxType {
    Text = "text",
    Password = "password"
}

interface ITextBoxProps {
    value: string | string[] | number;
    type: TextBoxType;
    name?: string;
    disabled?: boolean;
    state?: ValidationState;
    placeholder?: string;
    onChange: (value: string) => void;
}

export class NoheTextBox extends React.Component<ITextBoxProps> {
    render() {
        return (
            <input
                placeholder={this.props.placeholder}
                value={this.props.value} 
                type={this.props.type} 
                name={this.props.name} 
                onChange={(event: React.FormEvent<HTMLInputElement>) => {
                    this.props.onChange(event.currentTarget.value);
                }}
                disabled = {this.props.disabled}
            />
        );
    }
}
