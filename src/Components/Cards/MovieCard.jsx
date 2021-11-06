import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const MovieCard = () => {
  return (
    <Card sx={{ maxWidth: 345, width:250, position:'relative', m:3 }}>
      <IconButton aria-label="settings" sx={{position:'absolute', bgcolor: 'primary.main', right:5, top: 5}}>
            <MoreVertIcon sx={{transform: 'rotate(90deg)'}}/>
          </IconButton >
      <CardMedia
        component="img"
        image="https://vogue.ua/media/cache/resolve/inline_990x/uploads/article-inline/052/0de/9ef/5c8f9ef0de052.jpeg"
        alt="Paella dish"
      />
      <CardContent>
      <Box sx={{ position: 'absolute',borderRadius: '50%', display: 'inline-flex', bgcolor:'black', bottom: 80 }}>
      <CircularProgress variant="determinate" color="success"  value={45}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" sx={{color:'white'}}>
          {`${Math.round(45)}%`}
        </Typography>
      </Box>
    </Box>
        <Typography component="h2" variant="h5">
          Name of movie
        </Typography>
        <Typography>
          31.01.2020
        </Typography>
      </CardContent>
    </Card>
  );
}