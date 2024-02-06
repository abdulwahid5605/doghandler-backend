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
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { text: "Homepage", link: "/" },
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
          <Box sx={{ flexGrow: 1 }}>
            <img src="/logo.png" alt="Logo" sx={{ flexGrow: 1 }} />
          </Box>

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
                  backgroundColor: "#142032",
                },
              }}
            >
              <IconButton
                onClick={toggleMenu}
                sx={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  m: 1,
                  color: "white",
                }}
              >
                <CloseIcon />
              </IconButton>
              <Box>
                <img src="/logo.png" alt="Logo" sx={{ flexGrow: 1 }} />
              </Box>
              <List>
                {menuItems.map((item) => (
                  <ListItem key={item.text} onClick={toggleMenu}>
                    <Link href={item.link} sx={{ textDecoration: "none" }}>
                      <ListItemText
                        primary={item.text}
                        style={{
                          textDecoration: "none",
                          color: "white",
                        }}
                      />
                    </Link>
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
                sx={{
                  "& > *": { mr: "21px" },
                  fontWeight: 600,
                }}
              >
                {menuItems.map((item) => (
                  <Link
                    href={item.link}
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    {item.text}
                  </Link>
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
