import React, { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import Loader from "../UI/Loader/Loader";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesAsync,getGenresListAsync,getLanguagesListAsync } from "../../Thunks";
import {setPage} from '../../Store/Actions';
import { PaginationMovies } from "../UI/PaginationMovies";

export const CardList = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loader);
  const { movies, searchMovies, searchAction, discoverMovies, isDiscoverMovies, page } = useSelector(
    (state) => state.movies
  );

  let renderArray = movies;

  if (searchAction) {
    renderArray = searchMovies;
  };

  if (!searchAction && !isDiscoverMovies) {
    renderArray = movies;
  };


  if (isDiscoverMovies) {
    renderArray = discoverMovies;
  };

  const changePage = (event, value) => {
    dispatch(setPage(value));
  }

  useEffect(() => {
    dispatch(fetchMoviesAsync(page));
    dispatch(getGenresListAsync());
    dispatch(getLanguagesListAsync());
  }, [dispatch,page]);

  return (
    <Container>
      <PaginationMovies count={renderArray.total_pages} page={page} changePage={changePage}/>
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
    </Container>
    
  );
};
