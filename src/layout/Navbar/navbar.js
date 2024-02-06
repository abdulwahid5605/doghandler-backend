import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { text: "Home Page", link: "/" },
    { text: "Security Guards", link: "/about" },
    { text: "Security Services", link: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar>
          {/* Menu Icon Button */}
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            Your Logo
          </Typography>

          {/* Drawer for Links and Buttons */}
          <Hidden mdUp>
            <Drawer
              anchor="left"
              open={isMenuOpen}
              onClose={toggleMenu}
              PaperProps={{
                sx: {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              <IconButton
                onClick={toggleMenu}
                sx={{ position: "absolute", top: "0", right: "0", m: 1 }}
              >
                <CloseIcon />
              </IconButton>

              <List>
                {menuItems.map((item) => (
                  <ListItem
                    button
                    key={item.text}
                    onClick={toggleMenu}
                    sx={{ color: "black" }}
                  >
                    <a href={item.link}>
                      <ListItemText
                        primary={item.text}
                        style={{ textDecoration: "none", color: "black" }}
                      />
                    </a>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Hidden>

          {/* Links and Buttons */}
          <Hidden smDown>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ "& > *": { mr: 3 } }}
              >
                {menuItems.map((item) => (
                  <a
                    href={item.link}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      ":hover": { color: "navy" },
                    }}
                  >
                    {item.text}
                  </a>
                ))}
              </Typography>
            </Box>
          </Hidden>
          <Box>
            <Button variant="contained" style={{ marginRight: "10px" }}>
              Login
            </Button>
            <Button variant="contained">Register</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
