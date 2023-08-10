import React from "react";
import { Box, Button, MenuItem, Select } from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: "fff",
        display: "flex",
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px", "& > *": {
            flex: 1,
            height: "45px",
            margin: "8px",
        },
    },
});

const SearBar = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Select variant="filled" disableUnderline defaultValue="Full_time">
                <MenuItem value="Full_time">Temps plein</MenuItem>
                <MenuItem value="Part_time">Temps partiel</MenuItem>
                <MenuItem value="Contract">Temporaire</MenuItem>
            </Select>
            <Select variant="filled" disableUnderline defaultValue="Remote">
                <MenuItem value="Remote">Distance</MenuItem>
                <MenuItem value="On-site">Presentiel</MenuItem>
            </Select>
            <Button variant="contained" color="secondary" disableElevation>Recherche</Button>
        </Box>
    )
}

export default SearBar;