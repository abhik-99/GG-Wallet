import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useDrawerStore } from "../store";
import { useNavigate } from "react-router-dom";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import { useAuth } from "../lib/hooks";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Box from "@mui/material/Box";
import { useAccount } from "wagmi";

const LINKS = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/app/profile",
    name: "Profile",
  },
  {
    path: "/app/trigger",
    name: "Inheritance",
  },
  {
    path: "/app/MnM",
    name: "Micro Marketplace",
  },
];

function CustomAppbar() {
  const { drawerOpen, toggleDrawer } = useDrawerStore();
  const { isConnected } = useAccount();
  const navigate = useNavigate();
  const { handleSignOut } = useAuth();
  const signOut = () => {
    handleSignOut();
    toggleDrawer();
    navigate("/");
  };
  return (
    <>
      <AppBar enableColorOnDark color="primary" position="sticky">
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            GG Wallet
          </Typography>
          <IconButton onClick={toggleDrawer}>
            <MenuSharpIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ p: 1 }}>
          <IconButton onClick={toggleDrawer}>
            <KeyboardDoubleArrowRightIcon />
          </IconButton>
        </Box>
        <Typography variant="h5" color="text.secondary" align="center" my={4}>
          GG Wallet
        </Typography>
        <List>
          {LINKS.map((link, index) => (
            <>
              <ListItem key={"navLink-" + index}>
                <ButtonBase onClick={() => navigate(link.path)}>
                  <Typography>{link.name}</Typography>
                </ButtonBase>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
        {isConnected && (
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 4, textTransform: "none", mx: 2 }}
            onClick={signOut}
          >
            Sign Out
          </Button>
        )}
      </Drawer>
    </>
  );
}

export default CustomAppbar;
