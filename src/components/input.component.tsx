import glamorous from "glamorous";
import { ITheme } from "../stores/theme.store";

interface IInputProps {
  theme: ITheme;
}

export const INPUTG = glamorous.input<IInputProps>(
  {
    border: "none"
  },
  ({ theme }) => ({
    borderColor: theme.backgroundColor
  })
);
