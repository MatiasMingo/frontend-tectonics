import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
  disabled,
  type,
}: ButtonProps & { type?: string }) => (
  <StyledButton color={color} fixedWidth={fixedWidth} onClick={onClick} disabled={disabled} type={type}>
    {children}
  </StyledButton>
);
