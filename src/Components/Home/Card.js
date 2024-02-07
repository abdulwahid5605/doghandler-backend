import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { CardData } from "../../data";
import SecurityIcon from "@material-ui/icons/Security";

const CustomCard = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        style={{ textAlign: "center", color: "#3766a3", marginTop: "2vmax" }}
      >
        SECURITY SECTORS
      </Typography>
      <Typography
        variant="body1"
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "2vmax",
          marginBottom: "2vmax",
          paddingLeft: "5vmax",
          paddingRight: "5vmax",
        }}
      >
        This is a paragraph of text using Material-UI Typography component.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
        velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
        commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed
        eleifend tristique, tortor mauris maximus dui, at lacinia nisi ipsum nec
        diam.
      </Typography>
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {CardData.map((item) => (
          <Card
            style={{
              width: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "10px",
            }}
          >
            <SecurityIcon
              style={{ fontSize: 200, color: "#3766a3" }} // Adjust icon size and color
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ textAlign: "center" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ textAlign: "center" }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CustomCard;
