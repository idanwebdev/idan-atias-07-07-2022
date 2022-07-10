import { CardHeader, Typography } from '@mui/material'
import React from 'react'
import { getTheDay } from '../helpers/getTheDay'

export default function WeekDay(props) {
  let day = new Date(props.date)
  let toString = getTheDay[day.getDay()]
  return (
    <CardHeader title={toString} />
  )
}
