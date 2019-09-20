import * as React from "react";

interface IInputProps {
    value: string | string[] | number;
    name?: string;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export class Input extends React.Component<IInputProps> {
    render() {
        return (
            <input value={this.props.value} type={this.props.type} name={this.props.name} onChange={this.props.onChange} />
        );
    }
}
