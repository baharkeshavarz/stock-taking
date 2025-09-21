import { Container, Stack } from "@mui/material";
import HimartLogo from "src/components/icons/HimartLogo";
import StockKeeperForm from "./components/StockKeeperForm";

function Entrance() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexShrink: 0,
        bgcolor: "#fafafaff",
        backgroundImage: `linear-gradient(rgba(230, 247, 255, 0.98), rgba(247, 242, 242, 0.92)), url("/stock-background.svg")`,
        fill: "#eeeeeeff",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Stack sx={{ marginX: "auto", mt: 7 }}>
        <HimartLogo showTitle={true} />
      </Stack>
      <StockKeeperForm />
    </Container>
  );
}

export default Entrance;
