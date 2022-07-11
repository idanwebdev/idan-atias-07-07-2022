import React, { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import SettingsIcon from '@mui/icons-material/Settings'
import Drawer from '@mui/material/Drawer'
import { Radio, RadioGroup, FormLabel, FormGroup, FormControlLabel, Switch, Stack, Typography, FormControl } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setTemperatureType, setTheme } from '../redux/appSlice'

export default function Settings() {
  const [open, setOpen] = useState(false)
  const [checkedTheme, setThemeChecked] = useState(true)
  const [checkedDegrees, setCheckedDegrees] = useState(true)
  const dispatch = useDispatch()

  const toggleDraw = () => {
    setOpen(prevState => !prevState)
  }
  const handleDegreesChange = () => {
    setCheckedDegrees(prevState => !prevState)
  }

  const handleThemeChange = () => {
    setThemeChecked(prevState => !prevState)
  }

  useEffect(() => {
    if(checkedTheme){
        dispatch(setTheme('winter'))
    }else {
        dispatch(setTheme('summer'))
    }
  },[checkedTheme])

  useEffect(() => {
    if(checkedDegrees) {
        dispatch(setTemperatureType('Metric'))
    }else {
        dispatch(setTemperatureType('Imperial'))
    }
  }, [checkedDegrees])

  return (
  <>
    <IconButton onClick={toggleDraw} color="secondary" sx={{marginLeft: '20px'}}>
        <SettingsIcon />
    </IconButton>
    <Drawer
    anchor='right'
    open={open}
    onClose={toggleDraw}
    >
        <Stack padding={2} alignItems='center'>
            <Typography sx={{marginBottom: "20px"}} align="center">
                Customizations
            </Typography>
            <FormControl>
                <FormLabel>
                    Theme
                </FormLabel>
                <RadioGroup
                  aria-labelledby="controlled-radio-buttons-group"
                  name="theme-settings"
                  value={checkedTheme}
                  onChange={handleThemeChange}
                  row
                >
                  <FormControlLabel value={true} control={<Radio />} label="❄️"/>
                  <FormControlLabel sx={{marginLeft: '19%'}}value={false} control={<Radio />} label="☀️" />
                </RadioGroup>
                <FormLabel>
                    Temperature Conversion
                </FormLabel>
                <RadioGroup
                  aria-labelledby="ontrolled-radio-buttons-group"
                  name="temperature-settings"
                  value={checkedDegrees}
                  onChange={handleDegreesChange}
                  sx={{justifyContent: 'space-between'}}
                  row
                >
                  <FormControlLabel value={true} control={<Radio />} label={<img width="35px" src="/icons/celsius.png" alt="temperature"/>} />
                  <FormControlLabel value={false} control={<Radio />} label={<img width="35px" src="/icons/fahrenheit.png" alt="temperature"/>} />
                </RadioGroup>
            </FormControl>
        </Stack>
    </Drawer>
  </>
  )
}
