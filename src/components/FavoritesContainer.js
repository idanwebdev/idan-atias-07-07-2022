import { Box, Card, CardActions, CardContent, Typography, IconButton, Tooltip, Grid } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { remove } from '../redux/favoritesSlice'
import { setSuccess } from '../redux/appSlice'

export default function FavoritesContainer() {
  const {favorites} = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleDelete = (index) => {
    dispatch(remove(index))
    dispatch(setSuccess("Removed from favorites"))
    setTimeout(() => {
      dispatch(setSuccess(""))
    }, 5000)
  }

  return (
    <>
    <Typography
    variant='h2'
    align='center'
    sx={{marginBottom: '40px'}}
    >
      Welcome to your favorite cities!
    </Typography>
    <Grid container spacing={2} sx={{ marginTop: "5vw", width:"100%", justifyContent: 'center'}}>
      {favorites?.length > 0 ? (
      <>
          {
          favorites.map((item, index) => (
          <Grid item key={item.Key + index} xs={12} md={6} lg={3} sx={{height: "230px"}}>
            <Card>
              <CardContent>
              <Box display='flex' sx={{flexDirection: 'column'}}>
                <Typography
                variant='h4' 
                >
                  {item.LocalizedName}
                </Typography>
                <Typography
                variant='h5'
                component='p'
                >
                  {item.Temperature.Metric.Value}<sup>c</sup>
                </Typography>
              </Box>
              </CardContent>
              <CardActions>
                <Tooltip title="remove">
                  <IconButton aria-label='Remove' size="large" color='primary' onClick={() => handleDelete(index)}>
                    <DeleteOutlineIcon fontSize="large"/>
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
          ))
          }
      </>
      ) : (
        <Grid item>        
          <Typography
          align='center'
          variant='h3'
          flexGrow={1}
          >
            Nothing here right now, <br />
            Go add some..
          </Typography>
        </Grid>
      )}
    </Grid>
    </>
  )
}
