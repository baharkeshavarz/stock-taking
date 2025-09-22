import Box from "@mui/material/Box";
import { Outlet } from "react-router";

const EntranceLayout = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Outlet />
    </Box>
  );
};

export default EntranceLayout;
