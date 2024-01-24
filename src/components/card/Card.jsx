import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardComp = ({ title, info, image }) => {
  return (
    <div>
            <Card sx={{ maxWidth: 345 ,  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="image-services"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Contact us
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default CardComp

