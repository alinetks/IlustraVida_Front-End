import React from "react";
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import { shadows } from '@material-ui/system';
import TabPostagem from "../../componentes/postagens/tabpostagem/TabPostagem";

function Home(){
    return( 
        <>
            <Grid container className="container" direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item sm={6}>
                    <Box paddingX={10} >
                        <Typography variant="h3" gutterBottom component="h3" align="center" >Bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom component="h5" align="center">Vem ilustrar a vida com a gente!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box boxShadow={3} marginRight={1}>
                        <Button variant="outlined">Ver Postagens</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={6} className='img'>
                    <img src='./logo3.png' />
                </Grid>

                <Grid xs={12} className='tab-post'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;