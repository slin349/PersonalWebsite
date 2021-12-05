import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
import { styles } from '../styleobjects/LandingPage';
import { makeStyles } from '@mui/styles';
import { data } from '../data/data';
import memoji from '../images/memoji.png';

const useStyle = makeStyles(styles)

const LandingPage = () => {
    const classes = useStyle();

    return (
        <>
            <Grid className={classes.pageContainer}>
                <Grid container direction='row' className={classes.firstPageContentContainer}>
                    <Grid xs={3} item className={classes.image}>
                        <img src={memoji} alt='self-portrait' />
                    </Grid>
                    <Grid xs={6} container item direction='column'>
                        <Typography className={classes.nameText}>
                            Hello, my name is Steven Lin
                        </Typography>
                        <Typography className={classes.welcomeText}>
                            Welcome to my website :)
                        </Typography>
                        <Grid className={classes.buttonContainer}>
                            <Button>
                                About Me
                            </Button>
                            <Button>
                                Work Experience
                            </Button>
                            <Button>
                                Projects
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.pageTwoContainer}>

            </Grid>
        </>
    )
};

export default LandingPage;
