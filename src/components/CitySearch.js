import { Autocomplete, Box, TextField, createFilterOptions } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { setCurrent } from '../redux/weatherSlicer'
import { useDispatch, useSelector } from 'react-redux'
import { setFiveDays } from '../redux/fiveDaysSlice'
import { setError, viewedCity } from '../redux/appSlice'

export default function CitySearch() {
  const [value, setValue] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [options, setOptions] = useState([])
  const dispatch = useDispatch()
  const {current, app} = useSelector(state => state)

  useEffect(() => {
    //setting the default city - tel-aviv
    if(Object.keys(current).length === 0 && options.length === 0) {
    setDefault()
    }
  }, [])

  const setDefault = async() => {
    await getCities('Tel Aviv')
  }
  useEffect(() => {
    if(inputValue != '' && app.lottie) {
      app.lottie.play()
    }else if(inputValue == '' && app.lottie) {
      app.lottie.setSeeker(0)
    }
  }, [inputValue])

  useEffect(() => {
    if(Object.keys(current).length === 0 && options.length === 1) {
      setCurrentCity(options[0])
      dispatch(viewedCity(options[0]))
    }
  }, [options])

  useEffect(() => {
    //if a city is picked, calling the current city api
    if(value) {
      setCurrentCity(value)
      app.lottie.setSeeker(0)
    }
  }, [value])

  const getCities = async(query) => {
    //Grabing the input value while user search and requesting cities data
    const baseUrl = "https://dataservice.accuweather.com/locations/v1/cities/autocomplete"
    if(!!query && query.length > 1) {
    let response = await axios(baseUrl + `?apikey=${process.env.REACT_APP_API_KEY}&q=${query}&language=en-us`)
      .then((result) => {
        setOptions(result.data)
      })
      .catch((err) => {
        dispatch(setError("Something went wrong"))
        setTimeout(() => {
          dispatch(setError(""))
        }, 5000)
      })
      return response
    }
  }

  const setCurrentCity = (city) => {
    //get current weather data 
    if(city) {
    dispatch(viewedCity(city))
    const baseUrl = "https://dataservice.accuweather.com/currentconditions/v1/"
    axios(baseUrl + `${city.Key}?apikey=${process.env.REACT_APP_API_KEY}&language=en-us&details=false`)
    .then((result) => {
      dispatch(setCurrent(result.data))
      getFiveDays(city.Key)
    })
    .catch((err) => {
      dispatch(setError("Something went wrong"))
      setTimeout(() => {
        dispatch(setError(""))
      }, 5000)
    })
    }
  }

  const getFiveDays = (key) => {
    //geth 5 days weather forecast
    const baseUrl = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/"
    axios(baseUrl + `${key}?apikey=${process.env.REACT_APP_API_KEY}&language=en-us&details=false&metric=true`)
    .then((result) => {
      dispatch(setFiveDays(result.data))
    })
    .catch((err) => {
      dispatch(setError("Something went wrong"))
      setTimeout(() => {
        dispatch(setError(""))
      }, 5000)
    })
  }

  //Limiting result of the autocomplete to 5
  const OPTIONS_LIMIT = 5;
  const defaultFilterOptions = createFilterOptions();
  const filterOptions = (options, state) => {
  return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };

  return (
    <Box>
   <Autocomplete
      id="city-search"
      value={value}
      filterOptions={filterOptions}
      isOptionEqualToValue={(option, value) => option.Key === value.Key}
      defaultValue="Tel-Aviv"
      onClose={(reason) => {
        setOptions([])
      }}
      onChange={(event, newValue) => {
        setValue(newValue ? newValue : '');
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        if(newInputValue.length > 0) {
        setInputValue(newInputValue)
        getCities(newInputValue)
        }else {
          setInputValue('')
        }
      }}
      sx={{ width: 300}}
      options={options}
      autoHighlight
      getOptionLabel={(option) => {
        return option.LocalizedName ? option.LocalizedName : ''
      }}
      renderOption={(props, option) => (
        <Box component="li" {...props} key={option.Key}>
          {option.LocalizedName ? option.LocalizedName : ''} 
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          sx={{bgcolor: 'white' }}
          {...params}
          label="Search for a city"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
    </Box>
  )
}
