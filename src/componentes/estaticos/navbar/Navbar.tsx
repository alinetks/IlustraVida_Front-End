import React from 'react';
import { Box } from '@mui/material';
import { typography } from '@material-ui/system';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar className='menu' position="static">
                <Toolbar variant="dense">
                    <Box className='menu-text' style={{ cursor: "pointer"}} >
                        <Typography variant="h6" color="inherit">
                            IlustraVida
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-decorator-none'>
                        <Box className='menu-text cursor' mx={1}>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        </Link>
                        <Box className='menu-text cursor' mx={1}>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box className='menu-text cursor' mx={1}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box className='menu-text cursor' mx={1}>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box className='menu-text cursor' mx={1}>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )

}
export default Navbar;