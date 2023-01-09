import React from 'react'
import Logo from '../assets/vite.svg'
import {AppBar, Box, IconButton, Link, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const noop = () => {}

const NavBar = () => {
  return (
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={noop}
            sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ p: '0.5rem'}}>
          <img src={Logo} alt="Vite" />
        </Box>
        <Toolbar sx={{ px: '1rem', width: '100%' }}>
          <Link href="#" sx={{ color: 'inherit', p: '0.5rem' }}>Home</Link>
          <Link href="#" sx={{ color: 'inherit', p: '0.5rem' }}>History</Link>
        </Toolbar>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar