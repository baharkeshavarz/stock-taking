"use client";

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  LinearProgress,
  Typography,
} from "@mui/material";
import HimartLogo from "../icons/HimartLogo";

const LoadingComponent = () => {
  return (
    <>
      <Dialog open maxWidth="sm">
        <DialogTitle sx={{ textAlign: "center" }}>
          <HimartLogo size="medium" />
          <Typography
            variant="body2"
            fontWeight={600}
            color="text.primary"
            mt={3.5}
          >
            انبارگردانی هایمارت
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ width: "100%" }}>
            <LinearProgress variant="indeterminate" />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoadingComponent;
