import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import { useSelector } from "react-redux";
import { PrimaryButton } from "../UI/PrimaryButton";
import { useHistory } from "react-router-dom";

export const Movie = () => {
  const { getDetails, isFavourites } = useSelector((state) => state.movies);
  const history = useHistory();
  return (
    <Box sx={{ width: 900, m: "0 auto" }}>
      {isFavourites
      ?       <PrimaryButton
      onClick={() => history.push(`/favourites`)}
      sx={{ width: 200, left: -300 }}
    >
      Back
    </PrimaryButton>
    :
    <PrimaryButton
    onClick={() => history.push(`/main`)}
    sx={{ width: 200, left: -300 }}
  >
    Back
  </PrimaryButton>}
      <Paper>
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w500${getDetails.poster_path}`}
            alt="img"
            sx={{ width: 300 }}
          />
          <Box>
            <Typography sx={{ mt: 5, ml: 10, mr: 10, mb: 3, fontSize: 30 }}>
              {getDetails.title}
            </Typography>
            <Typography sx={{ ml: 10, mr: 10, mb: 1, fontSize: 20 }}>
              Release date: {getDetails.release_date}
            </Typography>
            {/* <Typography sx={{ml:10,mr:10,mb:1, fontSize: 20}}>Genre: {getDetails.genres[0].name}</Typography> */}
            <Typography sx={{ ml: 10, mr: 10, mb: 1, fontSize: 20 }}>
              Overview: {getDetails.overview}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
