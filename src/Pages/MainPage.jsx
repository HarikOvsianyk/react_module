import React from "react";
import Container from "@mui/material/Container";
import { CardList } from "../Components/Cards/CardList";
import {FiltersMenu} from '../Components/FiltersMenu/FiltersMenu';

export const MainPage = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 2, display:'flex' }}>
      <FiltersMenu/>
      <CardList />
    </Container>
  );
};
