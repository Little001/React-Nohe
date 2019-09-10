import glamorous from "glamorous";
import { ITheme } from "../stores/theme.store";

interface IButtonProps {
  theme: ITheme;
}

export const BUTTON = glamorous.button<IButtonProps>(
  {
    textTransform: "uppercase"
  },
  ({ theme }) => ({
    color: theme.backgroundColor
  })
);
