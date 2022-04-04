import React from 'react';
import { Box } from '@mui/material';
import { typography } from '@material-ui/system';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Navbar() {
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )
    let history = useHistory();
    const dispatch = useDispatch();


    function goLogout() {
        dispatch(addToken(''))
        alert("Usuario deslogado.")
        history.push('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar className='menu' position="static">
            <Toolbar variant="dense">
                <Box display="flex" justifyContent="start">
                    <Link to='/home' className='text-decorator-none'>
                        <Box className='menu-text cursor' mx={1}>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/postagens' className='text-decorator-none'>
                        <Box className='menu-text cursor' mx={1}>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/temas' className='text-decorator-none'>
                        <Box className='menu-text cursor' mx={1}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                    </Link>
                    <Box className='menu-text cursor' mx={1} onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>
                </Box>

            </Toolbar>
        </AppBar>

    }



    return (
        <>
        {navbarComponent}
        </>
    )

}
export default Navbar;