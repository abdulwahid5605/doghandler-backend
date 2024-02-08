import React, { useState } from "react";
import { Grid, Button, Typography, Paper, Box } from "@material-ui/core";
import { display } from "@mui/system";

const SecurityAreasBox = () => {
  const array = [
    {
      name: "Form 1",
    },
    { name: "Form 2" },
    { name: "Form 3" },
    { name: "Form 4" },
    { name: "Form 5" },
  ];

  const array2 = [
    {
      name: "Area 1",
    },
    { name: "Area 2" },
    { name: "Area 3" },
    { name: "Area 4" },
    { name: "Area 5" },
  ];

  const [organization, setOrganization] = useState("");

  const handleAddOrganization = () => {
    // Check if organization is already added
    if (!organization) {
      setOrganization("New Organization");
    }
  };

  const handleEdit = () => {
    // Logic to edit organization in one of the boxes
  };

  return (
    <Grid
      container
      spacing={2}
      style={{ marginTop: "2vmax", padding: "2vmax" }}
    >
      <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          style={{
            marginTop: "1vmax",
            marginBottom: "1vmax",
            fontWeight: "bold",
          }}
        >
          Forms
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box>
            <Paper
              style={{
                height: "15rem",
                width: "15rem",
                display: "flex",
                flexDirection: "column",
                padding: "1vmax",
                boxSizing: "border-box",
              }}
            >
              {array.map((item) => (
                <Typography variant="body1" style={{ padding: "0.3vmax" }}>
                  {item.name}
                </Typography>
              ))}
            </Paper>
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "1vmax",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "1vmax" }}
              >
                Add
              </Button>
              <Button variant="contained" color="primary">
                Edit
              </Button>
            </Box>
          </Box>
          <Box>
            <Paper
              style={{
                height: "15rem",
                width: "15rem",
                marginLeft: "3px",
                padding: "1vmax",
                boxSizing: "border-box",
              }}
            >
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", fontStyle: "italic" }}
              >
                Address
              </Typography>
              <Typography variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                minima dicta ad possimus.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          style={{
            marginTop: "1vmax",
            marginBottom: "1vmax",
            fontWeight: "bold",
          }}
        >
          Seached Areas
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box>
            <Paper
              style={{
                height: "15rem",
                width: "15rem",
                display: "flex",
                flexDirection: "column",
                padding: "1vmax",
                boxSizing: "border-box",
              }}
            >
              {array2.map((item) => (
                <Typography variant="body1" style={{ padding: "0.3vmax" }}>
                  {item.name}
                </Typography>
              ))}
            </Paper>
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "1vmax",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "1vmax" }}
              >
                Add
              </Button>
              <Button variant="contained" color="primary">
                Edit
              </Button>
            </Box>
          </Box>
          <Box>
            <Paper
              style={{
                height: "15rem",
                width: "15rem",
                marginLeft: "3px",
                padding: "1vmax",
                boxSizing: "border-box",
              }}
            >
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", fontStyle: "italic" }}
              >
                Address
              </Typography>
              <Typography variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                minima dicta ad possimus.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SecurityAreasBox;
