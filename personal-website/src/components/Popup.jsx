import React, { useState } from 'react'
import { CardMedia, Grid, MenuItem, Select, Typography } from '@mui/material';
import { styles } from '../styleobjects/popup';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles(styles)

const Popup = () => {
    const classes = useStyle();
    const [animal, setAnimal] = useState('Nothing');

    const handleChange = (event) => {
        setAnimal(event.target.value);
    };

    return (
        <Grid className={classes.pageContainer}>
            <Grid className={classes.gridContainer}>
                <Grid className={classes.userOptionsContainer}>
                    <Typography>Select an Animal</Typography>
                    <Select
                        value={animal}
                        onChange={handleChange}
                        className={classes.selectContainer}
                    >
                        <MenuItem value='Gorilla'>Gorrila</MenuItem>
                        <MenuItem value='Monkey'>Monkey</MenuItem>
                    </Select>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Popup;
