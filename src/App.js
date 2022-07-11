import React, { useState } from 'react';
import './App.css'
import AppBar from '@mui/material/AppBar'
import { Button, Toolbar, Box, Snackbar, Alert } from '@mui/material'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Container } from '@mui/system'
import { summerTheme, winterTheme } from './helpers/customThemes'
import { ThemeProvider } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import Settings from './components/Settings';

function App() {
  const [isHome, setIsHome] = useState(true)
  const {app} = useSelector(state => state)
  const handleClick = () => {
    setIsHome(prevState => !prevState)
  }
  return (
  <ThemeProvider theme={app.theme === 'winter' ? winterTheme : summerTheme}>
    <div className="App">

      <Snackbar open={!!app.error} autoHideDuration={5000}>
        <Alert severity="error" sx={{ width: '100%' }} variant="filled">
          {app.error}
        </Alert>
      </Snackbar>
      <Snackbar open={!!app.success} autoHideDuration={5000}>
        <Alert severity='success' sx={{ width: '100%' }} variant="filled">
          {app.success}
        </Alert>
      </Snackbar>

      <AppBar position="static">
        <Toolbar>
          <img src="/favicon.ico" alt="logo"/>
          <Box sx={{marginLeft: 'auto', display:'flex'}}>
            <Button 
            variant='contained'
            disabled={isHome}
            onClick={handleClick}
            sx={{marginRight: '20px'}}
            >         
                Home
            </Button>
            <Button 
            variant='contained'
            onClick={handleClick} 
            disabled={!isHome}>
                Favorites
            </Button>
            <Settings />
          </Box>
        </Toolbar>
      </AppBar>
      <Container
      maxWidth='xl' 
      component='div' 
      sx={{
        display:'flex', 
        flexDirection:'column', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingTop: '5vmax', 
        paddingBottom: '3vmax', 
        height: '100%'
      }}
      >
        {isHome ? (
          <Home />
        ) : (
          <Favorites />
        )}
      </Container>
    </div>
  </ThemeProvider>
  );
}

export default App;
