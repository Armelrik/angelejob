import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";

const Header = (props) => (
    <Box  p={10} bgcolor="secondary.second" color="white">
        <Grid container justify="center">
            <Grid item xs={10} >
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4">Liste des offres disponible</Typography>
                    <Button variant="contained" color="secondary" disableElevation>Poster un job</Button>
                </Box>
            </Grid>
        </Grid>
    </Box>
);

export default Header;