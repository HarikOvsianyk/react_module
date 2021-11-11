import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const Error = () => {
  return (
    <Container sx={{ width: "400px" }}>
      <Typography component="h2" variant="h5">
        404: Not found any page
      </Typography>
    </Container>
  );
};
