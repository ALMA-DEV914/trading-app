import React, { useState } from 'react';
import { createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import{ Appbar} from './components';

export const App: React.FC = (): JSX.Element => {
   const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");

   const theme = createTheme({
    palette: {
      mode: themeMode,
    }, 
    typography: {
      fontSize: 14,
    },
   })

   const handleDrawerToggle = React.useCallback(() => {

   }, []);

   const onThemeChange = React.useCallback(() => {

   }, []);

   return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar handleDrawerToggle={handleDrawerToggle} onThemeChange={onThemeChange}/>
    </ThemeProvider>
   )
}

