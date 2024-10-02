import React from 'react'
import {Scanner} from '@yudiel/react-qr-scanner'
import { Stack } from '@mui/material'

const QrScanner = (props) => {
  return (
    <Stack sx={{width:500}}>
    <Scanner onScan={(result) => {props.set(result[0].rawValue)}}/>
    </Stack>
  )
}

export default QrScanner