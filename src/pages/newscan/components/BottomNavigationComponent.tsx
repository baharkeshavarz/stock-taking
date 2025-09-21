import SearchIcon from "@mui/icons-material/Search";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";
import { BarcodeReader, Home } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router";

const BottomNavigationComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine current value based on pathname
  const getCurrentValue = () => {
    if (location.pathname.includes("/scan")) return 0;
    if (location.pathname === "/") return 1;
    if (location.pathname.includes("/search")) return 2;
    return 1; // default to home
  };

  const [value, setValue] = useState(getCurrentValue());

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/scan-code");
        break;
      case 1:
        navigate("/start");
        break;
      case 2:
        navigate("/search");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          handleNavigation(newValue);
        }}
        sx={{ backgroundColor: "white", py: 4 }}
      >
        <BottomNavigationAction
          label="ثبت کالا"
          icon={<BarcodeReader />}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 32,
            },
          }}
        />
        <BottomNavigationAction
          label="خانه"
          icon={<Home />}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 32,
            },
          }}
        />
        <BottomNavigationAction
          label="جستجو"
          icon={<SearchIcon />}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 32,
            },
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavigationComponent;
