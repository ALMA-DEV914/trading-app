import { AppBar, IconButton, Toolbar, Typography, Switch as ThemeSwitch } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon  from '@mui/icons-material/LightMode';
import React from 'react';

interface Props {
    handleDrawerToggle: () => void;
    onThemeChange: () => void;
}

export const Appbar: React.FC<Props> = ({handleDrawerToggle, onThemeChange}): JSX.Element => {
  return (
    <div>
      <AppBar position="static" variant="elevation">
        <Toolbar variant="dense">
            <IconButton color="inherit" onClick={handleDrawerToggle} edge="start">
                <MenuIcon />
            </IconButton>
            
            <Typography variant="subtitle1" component="div">
                Trading Application
            </Typography>
            <ThemeSwitch size='small' onChange={onThemeChange} />
        </Toolbar>
      </AppBar>
    </div>
  )
}



