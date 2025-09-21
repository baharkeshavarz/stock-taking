import { type SxProps, type Theme, Typography } from "@mui/material";
import type { FC, ReactNode } from "react";

interface HeadingTypographyProps {
  title: ReactNode;
  sx?: SxProps<Theme>;
}

const HeadingTypography: FC<HeadingTypographyProps> = ({ title, sx }) => {
  return (
    <Typography
      sx={{
        fontWeight: "bold",
        fontSize: "1rem",
        ...sx,
      }}
    >
      {title}
    </Typography>
  );
};

export default HeadingTypography;
