import React, { useState } from "react";
import Hero from "../Home/Hero";
import OrganizationHero from "../Organization/OrganizationHero";
import { AppBar, Box, Container, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "./Tabpanel";
import { Button } from "@material-ui/core";
import AccordionUsage from "./Accordion";
import AddListModal from "./AddListModal";

const Dashboard = () => {
  const [value, setValue] = useState(0);
  const [openListModal, setOpenListModal] = useState(false);

  function handleCloseListModal() {
    setOpenListModal(false);
  }
  function handleOpenListModal() {
    setOpenListModal(true);
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const list = [
    {
      id: 1,
      heading: "List1",
      summary:
        "Nulla id luctus metus. Duis auctor mi eget erat convallis fermentum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tenetur vel magni alias accusamus dolorum enim maxime necessitatibus rem iure dolore nesciunt amet ullam a velit sunt, voluptatum perferendis placeat.",
    },
    {
      id: 2,
      heading: "List2",
      summary:
        "Nulla id luctus metus. Duis auctor mi eget erat convallis fermentum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tenetur vel magni alias accusamus dolorum enim maxime necessitatibus rem iure dolore nesciunt amet ullam a velit sunt, voluptatum perferendis placeat.",
    },
    {
      id: 3,
      heading: "List3",
      summary:
        "Nulla id luctus metus. Duis auctor mi eget erat convallis fermentum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tenetur vel magni alias accusamus dolorum enim maxime necessitatibus rem iure dolore nesciunt amet ullam a velit sunt, voluptatum perferendis placeat.",
    },
  ];
  return (
    <>
      <OrganizationHero />
      <Container sx={{ marginTop: "12px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Tabs value={value} onChange={handleChange} aria-label="tabs">
            <Tab label="Checklist" />
            <Tab label="Information" />
            <Tab label="Object Form" />
          </Tabs>
          <Box></Box>
          <TabPanel width="100%" value={value} index={0}>
            <Box sx={{ textAlign: "right" }}>
              <button
                style={{
                  backgroundColor: "#0b85d6",
                  fontSize: "18px",
                  color: "white",
                  padding: "10px 30px",
                }}
                onClick={handleOpenListModal}
              >
                Add
              </button>
              <Box
                sx={{
                  width: "100%",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {list.map((item) => (
                  <AccordionUsage
                    key={item.id}
                    heading={item.heading}
                    summary={item.summary}
                  />
                ))}
              </Box>
              <AddListModal
                open={openListModal}
                handleClose={handleCloseListModal}
              />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography>Information content goes here</Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography>Object Form content goes here</Typography>
          </TabPanel>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
