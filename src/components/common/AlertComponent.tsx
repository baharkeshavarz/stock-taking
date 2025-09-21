import { Alert, Box } from "@mui/material";

const AlertComponent = () => {
  return (
    <Box py={2} sx={{ width: "100%" }}>
      <Alert severity="error">خطایی رخ داده است</Alert>
    </Box>
  );
};

export default AlertComponent;
