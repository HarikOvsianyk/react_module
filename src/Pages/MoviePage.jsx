import React from "react";
import Container from "@mui/material/Container";
import { Movie } from "../Components/Movie/Movie";

export const MoviePage = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
      <Movie />
    </Container>
  );
};
