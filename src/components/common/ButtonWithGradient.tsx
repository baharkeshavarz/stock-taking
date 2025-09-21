import { Button, useTheme } from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";
import type { FC } from "react";

const ButtonWithGradient: FC<ButtonProps> = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <Button
      {...props}
      disabled={props.disabled}
      sx={{
        color: theme.palette.common.black,
        background: `linear-gradient(to right top, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
        minWidth: 100,
        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonWithGradient;
