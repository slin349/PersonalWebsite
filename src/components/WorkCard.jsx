import { Divider, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { styles } from '../styleobjects/workCard';

const useStyle = makeStyles(styles)

const WorkCard = ({ workData }) => {
    const classes = useStyle();

    return (
        <Grid className={classes.workCard}>
            <Grid className={classes.workCardImageContainer}>
                <img src={workData.img} className={classes.workCardImage} alt='workImage' />
            </Grid>
            <Divider orientation='vertical' className={classes.dividerStyle} />
            <Grid className={classes.workCardContent}>
                <Typography className={classes.workCardTitle}>
                    {workData.title}
                </Typography>
                <Typography className={classes.workCardRole}>
                    {workData.role}
                </Typography>
                <Typography className={classes.workCardLocation}>
                    {workData.location}
                </Typography>
                <Typography className={classes.workCardDate}>
                    {workData.date}
                </Typography>
                <Typography className={classes.workCardDescription}>
                    {workData.description}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default WorkCard;
