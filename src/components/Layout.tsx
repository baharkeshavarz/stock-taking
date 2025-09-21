import Box from "@mui/material/Box";
import { Outlet } from "react-router";

import { Container } from "@mui/material";
import BottomNavigationComponent from "src/pages/scancode/components/BottomNavigationComponent";
import ToolbarComponent from "src/pages/scancode/components/ToolbarComponent";

const Layout = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          flexShrink: 0,
          backgroundColor: "white",
          borderBottom: "1px solid",
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ToolbarComponent />
      </Container>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
            bgcolor: "#fafafaff",
            backgroundImage: `linear-gradient(rgba(230, 247, 255, 0.98), rgba(247, 242, 242, 0.92)), url("/stock-background.svg")`,
            fill: "#eeeeeeff",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            py: 2,
            overflowX: "hidden",
          }}
        >
          <Outlet />
        </Container>
      </Box>

      {/* Sticky Footer Area */}
      <Container
        maxWidth="sm"
        sx={{
          position: "sticky",
          bottom: 0,
          zIndex: 1100,
          flexShrink: 0,
          backgroundColor: "white",
          borderTop: "1px solid",
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BottomNavigationComponent />
      </Container>
    </Box>
  );
};

export default Layout;
