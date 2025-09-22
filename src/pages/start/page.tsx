import { Container, Stack } from "@mui/material";
import HimartLogo from "src/components/icons/HimartLogo";
import StockKeeperForm from "./components/StockKeeperForm";

function Entrance() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "#fafafa",
        backgroundImage: `linear-gradient(rgba(230, 247, 255, 0.98), rgba(247, 242, 242, 0.92)), url("/stock-background.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
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
      <StockKeeperForm />
    </Container>
  );
}

export default Entrance;
