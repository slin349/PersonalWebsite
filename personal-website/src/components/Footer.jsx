import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { styles } from '../styleobjects/styles';

const useStyle = makeStyles(styles)

const Footer = () => {
    const classes = useStyle();

    return (
        <Grid className={classes.footerContainer}>
            <Typography className={classes.footerText}>
                Website is currently under-construction 🚧
            </Typography>
            <Typography className={classes.footerText}>
                ©️ Steven Lin
            </Typography>

        </Grid>
    )
}

export default Footer;
