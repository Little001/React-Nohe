import * as React from "react";
import { ValidationState } from "../components";

interface ITextBoxProps {
    value: string | string[] | number;
    name?: string;
    type?: string;
    disabled?: boolean;
    state?: ValidationState;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export class NoheTextBox extends React.Component<ITextBoxProps> {
    render() {
        return (
            <input 
                value={this.props.value} 
                type={this.props.type} 
                name={this.props.name} 
                onChange={this.props.onChange} 
                disabled = {this.props.disabled}
            />
        );
    }
}
