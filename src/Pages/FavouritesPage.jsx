import React from "react";
import Container from "@mui/material/Container";
import { Favourites } from "../Components/Favourites/Favourites";

export const FavouritesPage = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
      <Favourites />
    </Container>
  );
};