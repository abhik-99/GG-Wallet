import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { DndContext } from "@dnd-kit/core";
import CloseIcon from "@mui/icons-material/Close";
import { Beneficiary } from "../../components/Beneficiary";
import { Chain } from "../../components/Chain";
import { Canvas } from "../../components/Canvas";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";
import { useWalletBuilderStore } from "../../store";
import Button from "@mui/material/Button";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Builder = () => {
  const dialogOpen = useWalletBuilderStore((state) => state.dialogOpen);
  const toggleDialogClose = useWalletBuilderStore(
    (state) => state.toggleDialogClose
  );
  const theme = useTheme();
  const matchesSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Dialog
      fullScreen
      open={dialogOpen}
      onClose={toggleDialogClose}
      TransitionComponent={Transition}
      sx={{
        "& .MuiPaper-root": {
          backdropFilter: "blur(20px)",
          background: "transparent",
        },
      }}
    >
      <AppBar
        sx={{ position: "relative" }}
        enableColorOnDark
        color="transparent"
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDialogClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Wallet Builder
          </Typography>
          <Button
            variant="contained"
            color="success"
            autoFocus
            onClick={toggleDialogClose}
          >
            Save and Deploy
          </Button>
        </Toolbar>
      </AppBar>
      <DndContext>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4} lg={1}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: matchesSmUp ? "column" : "row",
                justifyContent: matchesSmUp ? "center" : "space-evenly",
                alignItems: "center",
              }}
            >
              <Chain />
              <Beneficiary />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={7}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                m: 2,
              }}
            >
              <Canvas />
            </Box>
          </Grid>
        </Grid>
      </DndContext>
    </Dialog>
  );
}

