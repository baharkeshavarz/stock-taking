import { Button, CircularProgress } from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";
import type { FC } from "react";

export interface ButtonWithLoadingProps extends ButtonProps {
  isLoading?: boolean;
}
const ButtonWithLoading: FC<ButtonWithLoadingProps> = ({
  isLoading,
  ...props
}) => {
  return (
    <Button
      {...props}
      disabled={isLoading || props.disabled}
      sx={{ ...props.sx, minWidth: 100, color: "common.white" }}
    >
      {isLoading ? (
        <CircularProgress color="inherit" size={20} />
      ) : (
        props.children
      )}
    </Button>
  );
};

export default ButtonWithLoading;
