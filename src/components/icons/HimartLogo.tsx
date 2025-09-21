import { Typography, Box, Stack } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { type SxProps, type Theme } from "@mui/system";
import type { FC } from "react";
import { Link } from "react-router";
import { DEFAULT_START_ROUTE } from "src/constants";

export type LogoStyle = "default" | "dark";

export const logoPathMap: Record<LogoStyle, string> = {
  default: "/logo.png",
  dark: "/logo-dark.png",
};

export type LogoSize = "large" | "medium" | "small";

const logoSizeSxMap: Record<LogoSize, SxProps<Theme>> = {
  large: {
    width: { xs: 140, sm: 180, md: 202 },
    height: "auto",
  },
  medium: {
    width: { xs: 116, sm: 140 },
    height: "auto",
  },
  small: {
    width: { xs: 96, sm: 90 },
    height: "auto",
  },
};

type HimartLogoProps = {
  style?: LogoStyle;
  size?: LogoSize;
  sx?: SxProps<Theme>;
  className?: string;
  alt?: string;
  showTitle?: boolean;
};

const HimartLogo: FC<HimartLogoProps> = ({
  style = "default",
  size = "large",
  sx,
  className,
  alt = "هایمارت",
  showTitle = false,
}) => {
  const { mode } = useColorScheme();
  const themedStyle = mode === "dark" && style === "default" ? "dark" : style;

  return (
    <Stack spacing={2.5} sx={{ textAlign: "center" }}>
      <Link to={DEFAULT_START_ROUTE}>
        <Box
          component="img"
          src={logoPathMap[themedStyle]}
          alt={alt}
          className={className}
          sx={{
            display: "block",
            objectFit: "contain",
            ...logoSizeSxMap[size],
            ...(sx as object),
          }}
        />
      </Link>
      {showTitle && (
        <Typography variant="caption" sx={{ color: "primary.dark" }}>
          دقیق‌تر بشمار، سریع‌تر مدیریت کن!
        </Typography>
      )}
    </Stack>
  );
};

export default HimartLogo;
