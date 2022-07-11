import React from 'react'
import { Box, Skeleton, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

export default function WeatherDescription() {
const {current, app} = useSelector((state => state))
  return (
    <>
    {current.WeatherText ? (
        <Box 
        sx={{display: 'flex', 
        justifyContent:'space-between', 
        alignItems: 'center', 
        margin: '2vmax 0'}}>
            <Typography 
            variant='h4'
            component='h4'
            >
                It is {current.WeatherText.toLowerCase()} right now in {app.city.LocalizedName} | {current.Temperature[app.tempratureType].Value}<sup>{app.tempratureType === "Metric" ? "C" : "F"}</sup>
            </Typography>
        </Box>
    ) : (
      <Box 
      sx={{display: 'flex', 
      alignItems: 'center', 
      margin: '2vmax 0',
      width: '100%'
      }}>
        <Skeleton animation="wave" sx={{width: '21%', height: '50px'}}/>
        <Skeleton animation="wave" sx={{width: '78%', height: '50px', marginLeft: '1%'}}/>
      </Box>
    )}
    </>
  )
}
