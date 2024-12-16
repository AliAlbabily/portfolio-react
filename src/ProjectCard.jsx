import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Collapse, Box } from '@mui/material';

function ProjectCard({name, imageUrl, githubUrl, demoIsAvailable, demoUrl}) {
    const [skillsExpanded, setSkillsExpanded] = useState(false);

    const handleGithubButtonClick = () => {        
        window.open(githubUrl, '_blank', 'noopener,noreferrer')
    };

    const handleDemoButtonClick = () => {        
        window.open(demoUrl, '_blank', 'noopener,noreferrer')
    };

    const handleSkillsButtonClick = () => {
        setSkillsExpanded(!skillsExpanded);
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
                <Button size="small" variant="outlined" onClick={handleSkillsButtonClick}>Skills</Button>
            </CardActions>
            <Collapse in={skillsExpanded} timeout="auto" unmountOnExit>
                <Box sx={{ padding: 2 }}>
                <Typography variant="body2" color="text.secondary">
                    • JavaScript <br />
                    • React <br />
                    • Material UI <br />
                    • Node.js <br />
                </Typography>
                </Box>
            </Collapse>
        </Card>
    );
}

export default ProjectCard;