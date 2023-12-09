import Container from "@mui/material/Container";
import { Builder, WalletsContainer } from "../../sections/wallets";
function Wallet() {
  return (
    <Container
      sx={{ height: "100%" }}
    >
      <WalletsContainer />
      <Builder />
    </Container>
  );
}

export default Wallet;
