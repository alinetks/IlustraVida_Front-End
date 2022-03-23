import React from "react";
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import { shadows } from '@material-ui/system';

function Home(){
    return(
        <>
            <Grid container className="container" direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#382a55", fontWeight: "bold" }}>Bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#382a55", fontWeight: "bold" }}>Vem ilustrar a vida com a gente!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box boxShadow={3} marginRight={1}>
                        <Button variant="outlined" style={{ backgroundColor: "#382a55", color: "white" }}>Ver Postagens</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src='./logo3.png' alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;