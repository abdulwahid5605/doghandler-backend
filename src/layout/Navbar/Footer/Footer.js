import React from "react";
import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#142032",
        color: "white",
        padding: "1vmax 4vmax",
        fontFamily: "Arial",
      }}
    >
      <Grid item xs={6} sm={3}>
        <Typography variant="h4">OUR DETAILS</Typography>
        <List>
          <ListItemText primaryTypographyProps={{ sx: { fontSize: "1.2rem" } }}>
            Titan Security Europe 61 Bridge Street, Kington, Herefordshire, HR5
            3DJ
          </ListItemText>

          <ListItemText primaryTypographyProps={{ sx: { fontSize: "1.2rem" } }}>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              +441803 446004
            </Link>
          </ListItemText>

          <ListItemText primaryTypographyProps={{ sx: { fontSize: "1.2rem" } }}>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
              }}
            >
              support@titansecurityeurope.com
            </Link>
          </ListItemText>
        </List>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Typography variant="h4">SECTORS</Typography>
        <List style={{ listStyle: "none" }}>
          <ListItemText primaryTypographyProps={{ sx: { fontSize: "1.2rem" } }}>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Security Equipment Hire
            </Link>
          </ListItemText>

          <ListItemText primaryTypographyProps={{ sx: { fontSize: "1.2rem" } }}>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Security Guards
            </Link>
          </ListItemText>

          <ListItemText primaryTypographyProps={{ sx: { fontSize: "1.2rem" } }}>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Recruitment and Staffing Solutions
            </Link>
          </ListItemText>
        </List>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Typography variant="h4">SERVICES</Typography>
        <List style={{ listStyle: "none" }}>
          <ListItemText primaryTypographyProps={{ sx: { fontSize: "1.2rem" } }}>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Crime Scene Guarding
            </Link>
          </ListItemText>

          <ListItemText primaryTypographyProps={{ sx: { fontSize: "1.2rem" } }}>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Close Protection Security
            </Link>
          </ListItemText>
          <ListItemText primaryTypographyProps={{ sx: { fontSize: "1.2rem" } }}>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Corporate Security Guard Service
            </Link>
          </ListItemText>
        </List>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="h4">LATEST NEWS</Typography>
        <List style={{ listStyle: "none" }}>
          <ListItemText primaryTypographyProps={{ sx: { fontSize: "1.2rem" } }}>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Cheap Business Security
            </Link>
          </ListItemText>

          <ListItemText primaryTypographyProps={{ sx: { fontSize: "1.2rem" } }}>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Case Study: UK Theatre
            </Link>
          </ListItemText>
          <ListItemText primaryTypographyProps={{ sx: { fontSize: "1.2rem" } }}>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Case Study: Redundancies in Germany
            </Link>
          </ListItemText>
        </List>
      </Grid>
    </Grid>
  );
};

export default Footer;
