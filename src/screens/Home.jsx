import React from 'react';
import {Button, Stack,Typography} from '@mui/material'
import Header from '../components/Header';
import { useNavigation,useNavigate } from 'react-router-dom';
import { Colors } from '../constants/Colors';


const Home = () => {
    const navigate = useNavigate()

   let screens = [
    {name:"Check In", url:"/check-in"},
    {name:"Security", url:"/security"},
    {name:"Boarding", url:"/boarding"},
    
    {name:"On Board", url:"/on-board"},
   ] 


  return (
    <Stack>
        <Stack sx={{p:1,mt:5}}>
            <Typography sx={{fontSize:20,fontWeight:'bold',textAlign:'left'}}>Simulate:</Typography>
            <Stack style={{flexDirection:'row',justifyContent:'space-between'}}>
            {screens.map((item,index)=>{
                return(
                    <Button variant='contained' sx={{m:1,backgroundColor:Colors.light,p:3}} onClick={()=>{navigate(item.url)}} key={index}>
                        <Typography style={{fontSize:20,fontWeight:'bold'}}>{item.name}</Typography>
                    </Button>
                )
            })}
            </Stack>
        </Stack>
    </Stack>
  )
}

export default Home