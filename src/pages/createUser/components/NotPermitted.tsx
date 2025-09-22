import { Alert, Container, Stack } from "@mui/material";
import HimartLogo from "src/components/icons/HimartLogo";

const NotPermitted = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#fafafa",
        backgroundImage: `linear-gradient(rgba(230, 247, 255, 0.98), rgba(247, 242, 242, 0.92)), url("/stock-background.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Stack
        spacing={4}
        alignItems="center"
        mt={4}
        justifyContent="center"
        width="100%"
      >
        <HimartLogo showTitle={true} />
        <img
          src="/store-keeping.png"
          width={220}
          height={180}
          alt="اپلیکیشن انبارگردانی هایمارت"
        />
      </Stack>
      <Alert severity="error" variant="outlined" sx={{ mt: 4 }}>
        شما اجازه این کار را ندارید و یا انبارگردانی غیر فعال است
      </Alert>
    </Container>
  );
};

export default NotPermitted;
