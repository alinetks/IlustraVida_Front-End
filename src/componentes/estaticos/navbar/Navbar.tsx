import React from 'react';
import { Box } from '@mui/material';
import { typography } from '@material-ui/system';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar className='menu' position="static">
                <Toolbar variant="dense">
                    <Box className='menu-text' style={{ cursor: "pointer"}} >
                        <Typography variant="h5" color="inherit">
                            IlustraVida
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box className='menu-text' mx={1} style={{ cursor: "pointer"}} >
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box className='menu-text' mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box className='menu-text' mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box className='menu-text' mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box className='menu-text' mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )

}
export default Navbar;