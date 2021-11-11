import React from "react";
import { MovieCard } from "../Cards/MovieCard";
import Loader from "../UI/Loader/Loader";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";


export const Favourites = () => {
  const { isLoading } = useSelector((state) => state.loader);
  const { favourites } = useSelector(state => state.movies);
 console.log(favourites);


  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: 5,
        mb: 5,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        favourites.movies &&
        favourites.movies.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })
      )}
    </Container>
  );
};
