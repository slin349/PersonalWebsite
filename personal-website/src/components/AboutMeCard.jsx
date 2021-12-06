import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { styles } from '../styleobjects/LandingPage';

const useStyle = makeStyles(styles)

const AboutMeCard = ({ datainfo }) => {
    const classes = useStyle();

    return (
        <Grid item className={classes.aboutMeCard}>
            <img src={datainfo.img} alt='tiny-img' className={classes.aboutMeImage} />
            <Typography className={classes.aboutMeTitleText}>{datainfo.title}</Typography>
            <Typography className={classes.aboutMeDescription}>{datainfo.description}</Typography>
        </Grid>
    )
}

export default AboutMeCard;
