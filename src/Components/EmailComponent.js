import { Box, Container, Typography } from "@mui/material";
import React from "react";

const EmailComponent = () => {
  return (
    <Box sx={{ marginTop: "10px" }}>
      <Typography
        fontSize={{ xs: 24, sm: 28 }}
        fontWeight={600}
        color="#192d5c"
      >
        Get a free qoute toady{" "}
      </Typography>
    </Box>
  );
};

export default EmailComponent;
