import React from 'react'
import { Card, Grid, Typography, Box, Avatar, Divider, CardHeader, CardContent } from '@mui/material'
import WeekDay from './WeekDay'


export default function DayForecast({forecast}) {
  const padWithZero = (iconNumber) => {
    let stringIt = iconNumber.toString().padStart(2,'0')
    return stringIt
  }
  return (
    <Grid item xs={12} md={6} lg={2.4}>
        <Card sx={{padding: '25px', height: "calc(100% - 50px)"}}>
            <WeekDay date={forecast.Date}/>
            <CardContent>
                
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Avatar sx={{marginRight: '10px'}} alt="weather icon" src={`https://developer.accuweather.com/sites/default/files/${padWithZero(forecast.Day.Icon)}-s.png`} variant="square"/>
                        <Typography variant='h6' component='p'>
                            {forecast.Day.IconPhrase}
                        </Typography>
                    </Box>
                    <Divider sx={{margin: '10px'}}/>
                    <Typography variant='h4'>
                        {forecast.Temperature.Maximum.Value} ~ {forecast.Temperature.Minimum.Value} 
                    </Typography>
                    <Divider sx={{margin: '10px'}}/>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Avatar sx={{marginRight: '10px'}} alt="weather icon" src={`https://developer.accuweather.com/sites/default/files/${padWithZero(forecast.Night.Icon)}-s.png`} variant="square"/>
                        <Typography variant='h6' component='p'>
                            {forecast.Night.IconPhrase}
                        </Typography>
                    </Box>
               
            </CardContent>
        </Card>
    </Grid>
  )
}
