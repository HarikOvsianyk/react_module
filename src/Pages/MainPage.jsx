import React from "react";
import Container from "@mui/material/Container";
import { CardList } from "../Components/Cards/CardList";

export const MainPage = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <CardList />
    </Container>
  );
};
