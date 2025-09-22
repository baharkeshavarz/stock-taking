import { Box, Typography, Button, Stack } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router";
import { DEFAULT_SCAN_CODE_ROUTE } from "src/constants";

const ProductNotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Box
        sx={{
          borderRadius: 2,
          boxShadow: 2,
          textAlign: "center",
          width: "90%",
          bgcolor: "white",
          py: 3,
          mt: 10,
        }}
      >
        <Stack spacing={2} alignItems="center">
          <ErrorOutlineIcon sx={{ fontSize: 50, color: "error.main" }} />
          <Typography variant="h6" fontWeight="bold">
            محصولی با بارکد موردنظر یافت نشد
          </Typography>
          <Typography variant="body2" color="text.secondary">
            لطفاً بارکد را دوباره بررسی کنید یا محصول دیگری را جستجو کنید.
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={() => navigate(DEFAULT_SCAN_CODE_ROUTE)}
          >
            بازگشت
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductNotFound;
