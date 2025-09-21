import Box from "@mui/material/Box";
import { Outlet } from "react-router";

const EntranceLayout = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        height: "100vh",
      }}
    >
      <Outlet />
    </Box>
  );
};

export default EntranceLayout;
