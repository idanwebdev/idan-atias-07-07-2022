import React from 'react'
import WeatherDescription from './WeatherDescription'
import { Paper, Box, AppBar, Toolbar, Skeleton, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux/es/exports'
import DayForecast from './DayForecast'
import AddToFavorites from './AddToFavorites'


export default function CityWrapper() {
const {week} = useSelector(state => state)
  return (
    <Paper elevation={1} sx={{width: '90vw',maxWidth: '100%', marginTop: '5vw', zIndex: 1}}>
        <AppBar position='static'>
            <Toolbar>
                <Box display={'flex'} sx={{justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                    <WeatherDescription />
                    <AddToFavorites />
                </Box>
            </Toolbar>
        </AppBar>
          {week.Headline && (
            <Typography
            align="left"
            sx={{margin: '20px 15px'}}>
                {week.Headline.Text}
            </Typography>
          )}
          <Grid container spacing={2} sx={{padding: '15px'}}>
            {!!week?.DailyForecasts ? (
              week.DailyForecasts.map((day, index) => (
                <DayForecast forecast={day} key={index}/>
              ))
            ) : (
            <>            
              <Grid item xs={12} md={6} lg={2.4} sx={{height: "22vw", minHeight: '225px', maxHeight: '500px'}}>
                <Skeleton animation="wave" sx={{width: '100%', height: '320px'}}/>
              </Grid>
              <Grid item xs={12} md={6} lg={2.4} sx={{height: "350px"}}>
                <Skeleton animation="wave" sx={{width: '100%', height: '320px'}}/>
              </Grid>
              <Grid item xs={12} md={6} lg={2.4} sx={{height: "350px"}}>
                <Skeleton animation="wave" sx={{width: '100%', height: '320px'}}/>
              </Grid>
              <Grid item xs={12} md={6} lg={2.4} sx={{height: "350px"}}>
                <Skeleton animation="wave" sx={{width: '100%', height: '320px'}}/>
              </Grid>
              <Grid item xs={12} md={6} lg={2.4} sx={{height: "350px"}}>
                <Skeleton animation="wave" sx={{width: '100%', height: '320px'}}/>
              </Grid>
            </>
            )}
          </Grid>

    </Paper>
  )
}
