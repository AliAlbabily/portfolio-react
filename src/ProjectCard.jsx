import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ProjectCard() {
    return ( 
        <Card sx={{ width: 250 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://user-images.githubusercontent.com/32642133/130327760-c3a8ab02-302d-46bc-ae2d-8e8c217caf2d.png"
            />
            <CardContent>
                <Typography variant="h5">
                Lizard
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained">Github</Button>
                <Button size="small" variant="contained">Demo</Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;