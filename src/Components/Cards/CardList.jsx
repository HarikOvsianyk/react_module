import React, { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import Loader from "../UI/Loader/Loader";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesAsync,getGenresListAsync,getLanguagesListAsync } from "../../Thunks";

export const CardList = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loader);
  const { movies, searchMovies, searchAction,isMoviesByGenre,moviesByGenre, moviesByLanguage, isMoviesByLanguage } = useSelector(
    (state) => state.movies
  );

  console.log(moviesByLanguage);
  let renderArray = movies;

  if (searchAction) {
    renderArray = searchMovies;
  };

  if (!searchAction && !isMoviesByGenre && !isMoviesByLanguage) {
    renderArray = movies;
  };

  if (isMoviesByGenre) {
    renderArray = moviesByGenre;
  };

  if (isMoviesByLanguage) {
    renderArray = moviesByLanguage;
  };

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
