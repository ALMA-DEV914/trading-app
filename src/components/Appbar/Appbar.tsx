import { AppBar, IconButton, Toolbar, Typography, Switch as ThemeSwitch } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon  from '@mui/icons-material/LightMode';
import React from 'react';
import "./Appbar.css"

interface Props {
    handleDrawerToggle: () => void;
    onThemeChange: () => void;
    isDarkMode: boolean;
    isDrawerOpen: boolean;
}

export const Appbar: React.FC<Props> = ({handleDrawerToggle, onThemeChange, isDarkMode, isDrawerOpen}): JSX.Element => {
  return (
    <div>
      <AppBar position="static" variant="elevation">
        <Toolbar className='toolbar'>
            <div className='toolbar-item'>
            <IconButton color="inherit" onClick={handleDrawerToggle} edge="start"
            sx={{mr: 2, ...(isDrawerOpen && {display: "none"})}}>
                <MenuIcon />
            </IconButton>
            
            <Typography variant="subtitle1" component="div">
                Trading Application
            </Typography>
            </div>
            <div className='toolbar-item'>
            {isDarkMode ? <DarkModeIcon/> : null}
            <ThemeSwitch size='small' color='default' className='switch' onChange={onThemeChange} />
              {isDarkMode ? <LightModeIcon/> : null}
            </div>  
        </Toolbar>
      </AppBar>
    </div>
  )
}



