import React from "react";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { MovieCard } from "../Cards/MovieCard";
import Loader from "../UI/Loader/Loader";
import { PrimaryButton } from "../UI/PrimaryButton";

export const Favourites = () => {
  const { isLoading } = useSelector((state) => state.loader);
  const { favourites } = useSelector((state) => state.movies);
  const history = useHistory();

  return (
    <Container>
      <PrimaryButton
        onClick={() => history.push(`/main`)}
        sx={{ width: 200, left: -200 }}
      >
        Back
      </PrimaryButton>
      <Container
        maxWidth="xl"
        sx={{
          mt: 5,
          mb: 5,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
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
    </Container>
  );
};
