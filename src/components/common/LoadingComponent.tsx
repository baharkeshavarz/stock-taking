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
          <HimartLogo />
          <Typography variant="h6" fontWeight={600}>
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
