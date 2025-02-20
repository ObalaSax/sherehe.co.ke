import { ArrowBack, Menu } from "@mui/icons-material";
import Logo from "../assets/Logo.svg";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Fab,
} from "@mui/material";
import { useState } from "react";
import { navLinks } from "../Features/Links/navLinks";

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Box
          display={"flex"}
          paddingX={2}
          sx={{ justifyContent: "space-between", width: "100%" }}
        >
          <Box
            display={{ xs: "block", md: "none" }}
            sx={{ justifyItems: "center", alignContent: "center" }}
          >
            <Button
              aria-label="menu button"
              sx={{
                color: "white",
                margin: "0",
              }}
              onClick={handleOpenDrawer}
            >
              <Menu />
            </Button>
          </Box>
          <Box
            display={"flex"}
            margin={{ xs: "0" }}
            paddingY={1}
            alignItems="center"
          >
            <img src={Logo} alt="Logo" height="40px" />{" "}
            <Typography variant="h4" color="default" marginLeft={3}>
              Sherehe
            </Typography>
          </Box>
          {/*--------Nav Links---------*/}
          <Box display={{ xs: "none", md: "flex" }}>
            <List sx={{ display: "flex" }}>
              {navLinks.map((link) => (
                <ListItem key={link.id}>
                  <ListItemButton sx={{ borderRadius: "3px" }}>
                    <ListItemText primary={link.navTitle} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          {/*--------Nav Links End---------*/}

          <Box
            display={{ xs: "none", md: "flex" }}
            marginRight={5}
            alignItems="center"
          >
            <Button>
              <Typography variant="button" color="initial">
                Sign In
              </Typography>
            </Button>
            <Button variant="contained">
              <Typography variant="button" color="default">
                Sign Up
              </Typography>
            </Button>
          </Box>
        </Box>
      </Toolbar>

      <Drawer open={openDrawer} onClose={handleCloseDrawer}>
        <Box width={{ xs: "65vw", md: "25vw" }}>
          <Box padding={2}>
            <Fab
              sx={{ right: "0", marginRight: "0" }}
              color="default"
              aria-label="Close Menu"
              size="small"
              onClick={handleCloseDrawer}
            >
              <ArrowBack />
            </Fab>
          </Box>
          <Divider />
          <List disablePadding>
            {navLinks.map((link) => (
              <ListItem key={link.id}>
                <ListItemButton>
                  <ListItemText primary={link.navTitle} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
