import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircularProgress from "@mui/material/CircularProgress";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { getDetailsAsync, setFavouriteAsync } from "../../Thunks";

export const MovieCard = (props) => {
  const { title, poster_path, release_date, id, vote_average } = props;
  const { currentUser } = useSelector((state) => state.user);
  const { isFavourites } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionId = localStorage.getItem("session_id");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleCardMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const onClickMore = () => {
    history.push(`/movie/${id}`);
    dispatch(getDetailsAsync(id));
  };
  const notify = () =>
    toast.success("Added tp favourite list", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const onClickFavourite = () => {
    dispatch(setFavouriteAsync(sessionId, currentUser.id, id));
    notify();
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isFavourites ? (
        ""
      ) : (
        <MenuItem onClick={onClickFavourite}>Add to favourite</MenuItem>
      )}
      <MenuItem onClick={onClickMore}>More...</MenuItem>
    </Menu>
  );
  return (
    <Card sx={{ maxWidth: 345, width: 250, position: "relative", m: 3 }}>
      <IconButton
        aria-label="settings"
        sx={{ position: "absolute", bgcolor: "primary.main", right: 5, top: 5 }}
        onClick={handleCardMenuOpen}
      >
        <MoreVertIcon sx={{ transform: "rotate(90deg)" }} />
      </IconButton>
      <CardMedia
        component="img"
        height='400'
        image={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="Paella dish"
        onClick={onClickMore}
      />
      <CardContent sx={{height:120}}>
        <Box
          sx={{
            position: "absolute",
            borderRadius: "50%",
            display: "inline-flex",
            bgcolor: "black",
            bottom: 105,
          }}
        >
          <CircularProgress
            variant="determinate"
            color="success"
            value={vote_average * 10}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              sx={{ color: "white" }}
            >
              {`${vote_average * 10}%`}
            </Typography>
          </Box>
        </Box>
        <Typography component="h5" sx={{fonsSize:20}}>
          {title}
        </Typography>
        <ToastContainer />
        <Typography>{release_date}</Typography>
      </CardContent>
      {renderMenu}
    </Card>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  id: PropTypes.number,
  vote_average: PropTypes.number,
};
