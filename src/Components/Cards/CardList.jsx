import React, { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import Loader from "../UI/Loader/Loader";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesAsync,getGenresListAsync,getLanguagesListAsync } from "../../Thunks";

export const CardList = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loader);
  const { movies, searchMovies, searchAction,isMoviesByGenre,moviesByGenre } = useSelector(
    (state) => state.movies
  );

  console.log(moviesByGenre);
  let renderArray = movies;

  if (searchAction) {
    renderArray = searchMovies;
  }

  if (!searchAction && !isMoviesByGenre) {
    renderArray = movies;
  }

  if (isMoviesByGenre) {
    renderArray = moviesByGenre;
  }

  useEffect(() => {
    dispatch(fetchMoviesAsync());
    dispatch(getGenresListAsync());
    dispatch(getLanguagesListAsync());
  }, [dispatch]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: 5,
        mb: 5,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent:'space-between'
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        renderArray.results &&
        renderArray.results.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })
      )}
    </Container>
  );
};
