import React from 'react'
import { Stack,Typography,AppBar } from '@mui/material'
import { Colors } from '../constants/Colors'

const Header = () => {
  return (
    <AppBar sx={{backgroundColor:'#fff'}} elevation={0}>
    <Stack sx={{width:'100%',backgroundColor:'#fff',alignItems:'flex-start',p:1}}>
        <Typography sx={{fontSize:30,fontWeight:'bold',color:Colors.dark}}>AIRPASS <sub style={{fontSize:10,color:Colors.text}}>By TRAVELPAL</sub></Typography>
    </Stack>
    </AppBar>
  )
}

export default Header