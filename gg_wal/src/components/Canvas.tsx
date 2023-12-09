import { useDroppable } from "@dnd-kit/core";
import Paper from "@mui/material/Paper";
import useTheme from "@mui/material/styles/useTheme";
import AccountBalanceWalletTwoToneIcon from "@mui/icons-material/AccountBalanceWalletTwoTone";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import Person4Icon from "@mui/icons-material/Person4";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

export function Canvas() {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const theme = useTheme();

  return (
    <Paper
      sx={{
        height: "100%",
        border: isOver
          ? `solid ${theme.palette.background.paper} 2px`
          : undefined,
        backgroundColor: isOver
          ? `transparent`
          : theme.palette.background.paper,
        p:2, 
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={setNodeRef}
    >
      <Box sx={{ my: 2 }}>
        <Grid container>
          <Grid item xs={12}>
            <Person4Icon sx={{ height: 30, width: 30 }} />
          </Grid>
          <Grid item xs={12}>
            <AccountBalanceWalletTwoToneIcon
              sx={{ height: 300, width: 300, m: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <AccountTreeOutlinedIcon sx={{ height: 30, width: 30 }} />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
