import React, { useEffect } from "react";
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import { shadows } from '@material-ui/system';
import TabPostagem from "../../componentes/postagens/tabpostagem/TabPostagem";
import { useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import ModalPostagem from "../../componentes/postagens/modalPostagem/ModalPostagem";

function Home(){

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          history.push("/login")
  
      }
  }, [token])
  
    return( 
        <> 
            <Grid container className="container" direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={10} >
                        <Typography variant="h3" gutterBottom className="h3" align="center" >Bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom className="h5" align="center">Vem ilustrar a vida com a gente!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                    <Box boxShadow={3} marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Box boxShadow={3} marginRight={1}>
                        <Button variant="outlined">Ver Postagens</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className='img'>
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