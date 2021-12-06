import React from 'react'
import { Button, Divider, Grid, Typography } from '@mui/material';
import { styles } from '../styleobjects/LandingPage';
import { makeStyles } from '@mui/styles';
import { data } from '../data/data';
import memoji from '../images/memoji.png';
import AboutMeCard from './AboutMeCard';

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
                            Hello, my name is
                            <span className={classes.myNameText}>
                                &nbsp;Steven Lin
                            </span>
                        </Typography>
                        <Typography className={classes.welcomeText}>
                            Welcome to my website!
                        </Typography>
                        <Grid className={classes.buttonContainer}>
                            <Button variant='contained' className={classes.button}>
                                About Me
                            </Button>
                            <Button variant='contained' className={classes.button}>
                                Work
                            </Button>
                            <Button variant='contained' className={classes.button}>
                                Projects
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.pageTwoContainer}>
                <Grid className={classes.aboutMeTitleContainer}>
                    <Typography className={classes.aboutMeTitle}>
                        About Me
                    </Typography>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid className={classes.aboutMeTextContainer}>
                    {data.map((datainfo) => (
                        <AboutMeCard datainfo={datainfo} />
                    ))}
                </Grid>
            </Grid>
        </>
    )
};

export default LandingPage;
