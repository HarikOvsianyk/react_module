import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { PrimaryButton } from "../UI/PrimaryButton";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const history = useHistory();
  return (
    <Box>
      <PrimaryButton
        onClick={() => history.push(`/main`)}
        sx={{ width: 200, left: -400 }}
      >
        Back to Sign Up
      </PrimaryButton>
      <Card sx={{ maxWidth: 900, width: 350, position: "relative", m: 3 }}>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w200/${currentUser.avatar.tmdb.avatar_path}`}
          alt="Paella dish"
          sx={{ height: 300 }}
        />
        <CardContent>
          <Box
            sx={{
              position: "absolute",
              borderRadius: "50%",
              display: "inline-flex",
              bgcolor: "black",
              bottom: 105,
            }}
          ></Box>
          <Typography
            component="h2"
            variant="h5"
            sx={{ textAlign: "center", mb: 3 }}
          >
            {currentUser.name}
          </Typography>
          <Typography component="h2" variant="subtitle1">
            Username: {currentUser.username}
          </Typography>
          <Typography component="h2" variant="subtitle1">
            Region: {currentUser.iso_3166_1}
          </Typography>
          <Typography component="h2" variant="subtitle1">
            ID: {currentUser.id}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
