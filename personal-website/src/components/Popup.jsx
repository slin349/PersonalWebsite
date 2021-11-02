import React from 'react'
import { Divider, Grid, Typography } from '@mui/material';
import { styles } from '../styleobjects/popup';
import { makeStyles } from '@mui/styles';
import { data } from '../data/data';
import selfImage from '../images/self-image.jpeg';

const useStyle = makeStyles(styles)

const Popup = () => {
    const classes = useStyle();

    return (
        <Grid direction='column'>
            <Grid
                container
                direction='column'
                className={classes.pageContainerOne}
            >
                <Typography className={classes.whiteText}>
                    Hello👋
                </Typography>
                <Typography className={classes.whiteText}>
                    Welcome to my website!
                    <Typography className={classes.reverseWhiteText}>
                        Welcome to my website!
                    </Typography>
                </Typography>
            </Grid>
            <Grid
                container
                direction='column'
                className={classes.pageContainerTwo}
            >
                <Typography className={classes.aboutMeTitle}>
                    About Me 🔍
                    <Divider className={classes.divider} />
                </Typography>
                <Grid
                    container
                    className={classes.aboutMeContentContainer}
                >
                    {data.map((content) => (
                        <Grid
                            item
                            container
                            xs={4}
                            className={classes.aboutMeContent}
                        >
                            <Grid
                                item
                                xs={6}
                                className={classes.imageContainer}
                            >
                                <img
                                    src={content.imagePath}
                                    alt={content.title}
                                    className={classes.imageStyle}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >
                                <Typography>
                                    {content.content}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Popup;
