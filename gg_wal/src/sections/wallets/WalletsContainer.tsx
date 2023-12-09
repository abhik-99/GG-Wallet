import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useWalletBuilderStore } from "../../store";
import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";
const WALLETS = [];

export const WalletsContainer = () => {
  const toggleDialog = useWalletBuilderStore((state) => state.toggleDialogOpen);
  const theme = useTheme();
  return (
    <Paper
      sx={{
        background: "transparent",
        border: `solid ${theme.palette.grey[700]} 3px`,
        height: 500,
        mt: 2,
      }}
    >
      {WALLETS.length ===0 ? (
        <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <Typography color="text.secondary" mb={4}>You don't seem to have any GG Wallets.</Typography>
          <Button variant="contained" onClick={toggleDialog}>
            Create Wallet
          </Button>
        </Box>
      ) : (
        <Box></Box>
      )}
    </Paper>
  );
};
