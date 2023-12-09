import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useWalletBuilderStore } from "../../store";
import useTheme from "@mui/material/styles/useTheme";

export const WalletsContainer = () => {
  const toggleDialog = useWalletBuilderStore((state) => state.toggleDialogOpen);
  const theme = useTheme()
  return (
    <Paper sx={{ background: "transparent", border: `solid ${theme.palette.grey[700]} 4px`, height: "100%"}}>
      <Button variant="outlined" onClick={toggleDialog}>
        Open full-screen dialog
      </Button>
      <Typography>Hello World</Typography>
    </Paper>
  );
};
