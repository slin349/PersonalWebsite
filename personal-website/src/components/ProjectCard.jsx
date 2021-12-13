import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { styles } from '../styleobjects/styles';
import memoji from '../images/memoji.png';

const useStyle = makeStyles(styles)

const ProjectCard = () => {
    const classes = useStyle();

    return (
        <Grid xs={4} className={classes.projectCardContainer}>
            <Grid className={classes.projectCard}>
                <img src={memoji} className={classes.projectCardImage} alt='projectImage' />
            </Grid>
        </Grid>
    )
}

export default ProjectCard;
