import React from 'react'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Tooltip from '@mui/material/Tooltip'
import { useDispatch, useSelector } from 'react-redux'
import { setSuccess } from '../redux/appSlice';
import { add } from '../redux/favoritesSlice';

export default function AddToFavorites() {
  const dispatch = useDispatch()
  const { current,app } = useSelector(state => state)

  const handleClick = () => {
    if(!!current) {
    dispatch(add({...current, ...app.city}))
    dispatch(setSuccess("Added city to favorites"))
    setTimeout(() => {
      dispatch(setSuccess(""))
    }, 5000)
    }
  }
  return (
  <Tooltip title="Add to favorites">
    <IconButton aria-label='add to favorites' size="large" color='secondary' onClick={handleClick}>
        <FavoriteIcon fontSize="large"/>
    </IconButton>
  </Tooltip>
  )
}
