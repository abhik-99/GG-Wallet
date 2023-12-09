import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useDrawerStore } from "../store";

function CustomAppbar() {
  const {drawerOpen, toggleDrawer} = useDrawerStore();
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
      <List>
        <ListItem>
          <Typography>Page 1 </Typography>
        </ListItem>
        <ListItem>
          <Typography>Page 2</Typography>
        </ListItem>
        <ListItem>
          <Typography>Page 3</Typography>
        </ListItem>
      </List>
    </Drawer>
    </>
  );
}

export default CustomAppbar;
