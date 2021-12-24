import { Grid, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { styles } from '../styleobjects/styles';

const useStyle = makeStyles(styles)

const ProjectCard = ({ projectData }) => {
    const classes = useStyle();
    console.log(projectData);

    return (
        <Grid xs={4} className={classes.projectCardContainer}>
            <Link href={projectData.link} target='_blank' rel='noopener'>
                <Grid className={classes.projectCard}>
                    <Typography className={classes.projectName}>{projectData.name}</Typography>
                    <img src={projectData.img} className={classes.projectCardImage} alt='projectImage' />
                </Grid>
            </Link>
        </Grid>
    )
}

export default ProjectCard;
