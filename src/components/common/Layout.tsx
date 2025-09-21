import Box from "@mui/material/Box";
import * as React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  const layoutRef = React.useRef<HTMLDivElement>(null);
  return (
    <Box
      ref={layoutRef}
      sx={{
        position: "relative",
        display: "flex",
        overflow: "auto",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minWidth: 0,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
