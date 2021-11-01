import React, { useState } from 'react'
import { Grid, Typography } from '@mui/material';
import { styles } from '../styleobjects/popup';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles(styles)

const Popup = () => {
    const classes = useStyle();

    return (
        <Grid direction='column'>
            <Grid className={classes.pageContainerOne}>
                <Typography className={classes.whiteText}>
                    Hello!
                </Typography>
            </Grid>
            <Grid className={classes.pageContainerTwo}>
                <Typography className={classes.blackText}>
                    Hello!
                </Typography>
            </Grid>
        </Grid>
    )
};

export default Popup;
