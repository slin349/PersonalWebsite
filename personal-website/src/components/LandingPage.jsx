import React, { useEffect, useState } from 'react'
import { Button, Divider, Grid, Typography } from '@mui/material';
import { Link as MaterialLink } from '@mui/material';
import { styles } from '../styleobjects/styles';
import { makeStyles } from '@mui/styles';
import { aboutMeData, workData, projectData } from '../data/data';
import memoji from '../images/memoji.png';
import AboutMeCard from './AboutMeCard';
import WorkCard from './WorkCard';
import ProjectCard from './ProjectCard';
import { Link } from 'react-scroll/modules';
import Footer from './Footer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FeedIcon from '@mui/icons-material/Feed';

const useStyle = makeStyles(styles)

const LandingPage = () => {
    const classes = useStyle();
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 800) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);

        return () => {
            window.removeEventListener('scroll', toggleVisible)
        }

    }, []);

    return (
        <Grid>
            <Grid className={classes.firstPageContainer} id='firstPage'>
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
                        <Grid className={classes.iconContainer}>
                            <MaterialLink href='https://github.com/slin349?tab=repositories' target='_blank' rel='noopener'>
                                <GitHubIcon className={classes.icons} />
                            </MaterialLink>
                            <MaterialLink href='https://www.linkedin.com/in/slin349/' target='_blank' rel='noopener'>
                                <LinkedInIcon className={classes.icons} />
                            </MaterialLink>
                            <MaterialLink href='mailto:stevenlin159@gmail.com'>
                                <EmailIcon className={classes.icons} />
                            </MaterialLink>
                            <MaterialLink href='https://github.com/slin349?tab=repositories' target='_blank' rel='noopener'>
                                <FeedIcon className={classes.icons} />
                            </MaterialLink>
                        </Grid>
                        <Grid className={classes.buttonContainer}>
                            <Link to='aboutMe' smooth={true} className={classes.buttonLink}>
                                <Button variant='contained' className={classes.button}>
                                    About Me
                                </Button>
                            </Link>
                            <Link to='work' smooth={true} className={classes.buttonLink}>
                                <Button variant='contained' className={classes.button}>
                                    Work
                                </Button>
                            </Link>
                            <Link to='projects' smooth={true} className={classes.buttonLink}>
                                <Button variant='contained' className={classes.button}>
                                    Projects
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.pageTwoContainer} id='aboutMe'>
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
            <Grid className={classes.pageThreeContainer} id='work'>
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
            <Grid className={classes.pageFourContainer} id='projects'>
                <Grid className={classes.titleContainer}>
                    <Typography className={classes.title}>
                        Projects
                    </Typography>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid container className={classes.projectContentContainer}>
                    {projectData.map((projectData) => (
                        <ProjectCard projectData={projectData} />
                    ))}
                </Grid>
            </Grid>
            <Link to='firstPage' smooth={true}>
                <Button style={{ display: visible ? 'inline' : 'none' }} className={classes.scrollButton}>
                    ^
                </Button>
            </Link>
            <Grid className={classes.footer}>
                <Footer />
            </Grid>
        </Grid>
    )
};

export default LandingPage;
