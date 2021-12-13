import React from 'react'
import { Button, Divider, Grid, Typography } from '@mui/material';
import { styles } from '../styleobjects/styles';
import { makeStyles } from '@mui/styles';
import { aboutMeData, workData } from '../data/data';
import memoji from '../images/memoji.png';
import AboutMeCard from './AboutMeCard';
import WorkCard from './WorkCard';
import ProjectCard from './ProjectCard';

const useStyle = makeStyles(styles)

const LandingPage = () => {
    const classes = useStyle();

    return (
        <Grid>
            <Grid className={classes.firstPageContainer}>
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
                <Grid className={classes.titleContainer}>
                    <Typography className={classes.title}>
                        About Me
                    </Typography>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid className={classes.contentContainer}>
                    {aboutMeData.map((datainfo, index) => (
                        <AboutMeCard key={index} datainfo={datainfo} />
                    ))}
                </Grid>
            </Grid>
            <Grid className={classes.pageThreeContainer}>
                <Grid className={classes.titleContainer}>
                    <Typography className={classes.title}>
                        Work Experience
                    </Typography>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid className={classes.contentContainer}>
                    {workData.map((workdata, index) => (
                        <WorkCard key={index} workData={workdata} />
                    ))}
                </Grid>
            </Grid>
            <Grid className={classes.pageFourContainer}>
                <Grid className={classes.titleContainer}>
                    <Typography className={classes.title}>
                        Projects
                    </Typography>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid container className={classes.contentContainer}>
                    {aboutMeData.map(() => (
                        <ProjectCard />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
};

export default LandingPage;
