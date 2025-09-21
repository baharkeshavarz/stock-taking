import SearchIcon from "@mui/icons-material/Search";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";
import { BarcodeReader, Home } from "@mui/icons-material";

const BottomNavigationComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        sx={{ backgroundColor: "white", py: 3 }}
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
