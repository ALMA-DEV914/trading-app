import React from 'react';
import { Divider, Drawer, IconButton, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const DrawerHeader = styled("div")(({theme}) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

const LogoStyled = styled("div")(({theme}) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
}))

interface Props{
    isOpen: boolean;
    isDrawerOpen: boolean;
    handleDrawerToggle: () => void;
}

const DRAWER_WIDTH = 240;

export const Sidebar: React.FC<Props> = ({isOpen, isDrawerOpen, handleDrawerToggle}): JSX.Element => {
    const theme = useTheme();

  return (
    <>
      <Drawer sx ={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MUIDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor='left'
      open={isOpen}>
       <DrawerHeader>
         <LogoStyled>
            <Typography variant='subtitle2' component="div" align="left">
                Repositoy logo
            </Typography>
         </LogoStyled>
         <IconButton onClick={handleDrawerToggle}>
            {theme.direction ? (<ChevronLeft/>) : (<ChevronRight/>
            )}
         </IconButton>
       </DrawerHeader>
      </Drawer>
    </>
  )
}

export default Sidebar
