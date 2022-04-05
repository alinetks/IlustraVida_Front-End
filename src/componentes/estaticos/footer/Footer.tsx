import React from 'react';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid, Button } from '@material-ui/core';

import './Footer.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokensReducer';
import { useHistory } from 'react-router-dom';

function Footer() {

    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )
    let history = useHistory();
    const dispatch = useDispatch();

    var footerComponent;

    if(token != ""){
        footerComponent = <Grid container className='estrutura-rodape' justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className='rodape'>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className='foot-h5'>Siga-nos nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a className='icons' href="https://www.facebook.com/generationbrasil" target="_blank">
                        <FacebookIcon className='icons-size'/>
                    </a>
                    <a className='icons' href="https://www.instagram.com/generationbrasil/" target="_blank">
                        <InstagramIcon className='icons-size'/>
                    </a>
                    <a className='icons' href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                        <LinkedInIcon className='icons-size'/>
                    </a>
                </Box>
            </Box>
            <Box className='rodape-copy'>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#b94f51" }} >© 2020 Copyright:</Typography>
                </Box>
                <Box>
                    <a target="_blank" href="https://brasil.generation.org">
                        <Typography variant="subtitle2" gutterBottom style={{ color: "#b94f51" }} align="center">brasil.generation.org</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }

    return (
        <>
        {footerComponent}
        </>
    )

}

export default Footer;