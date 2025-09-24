import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";
import { BarcodeReader, Home, Person } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router";
import {
  DEFAULT_SCAN_CODE_ROUTE,
  DEFAULT_SETTING_ROUTE,
  DEFAULT_STOCK_KEEPER_ROUTE,
} from "src/constants";

const BottomNavigationComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentValue = () => {
    if (location.pathname.includes("/scan")) return 0;
    if (location.pathname === "/") return 1;
    if (location.pathname.includes("/settings")) return 2;
    return 1;
  };

  const [value, setValue] = useState(getCurrentValue());

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate(DEFAULT_SCAN_CODE_ROUTE);
        break;
      case 1:
        navigate(DEFAULT_STOCK_KEEPER_ROUTE);
        break;
      case 2:
        navigate(DEFAULT_SETTING_ROUTE);
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
          label="پروفایل من"
          icon={<Person />}
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
