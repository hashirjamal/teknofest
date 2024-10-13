import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function CardBox({id, imageURL, title, description, timings, price}) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "rgb(21,29,38)", color: "white" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'white' }}>
          {price}
        </Typography>
        <Typography variant="body2" sx={{ color: 'white' }}>
          Timings: <b>{timings}</b>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/competitions/${id}`}><Button sx={{color: "white"}} size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
  );
}
