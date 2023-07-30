import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

function ProjectCard({name, imageUrl, githubUrl, demoIsAvailable, demoUrl}) {

    const handleGithubButtonClick = () => {        
        window.open(githubUrl, '_blank', 'noopener,noreferrer')
    };

    const handleDemoButtonClick = () => {        
        window.open(demoUrl, '_blank', 'noopener,noreferrer')
    };

    return ( 
        <Card sx={{ width: 250 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={imageUrl}
            />
            <CardContent>
                <Typography variant="h5">{name}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" onClick={handleGithubButtonClick}>Github</Button>
                {demoIsAvailable ? <Button size="small" variant="contained" onClick={handleDemoButtonClick}>Demo</Button> : null}
            </CardActions>
        </Card>
    );
}

export default ProjectCard;