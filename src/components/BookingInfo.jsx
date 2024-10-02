import { CircularProgress, Modal, Stack, Typography } from '@mui/material'
import React, { useEffect,useState } from 'react'
import  { Colors as c} from '../constants/Colors'

const BookingInfo = (props) => {

  const data = props.data
  console.log(data)

  const Timer = () =>{
    setTimeout(() => {
      props.visible(false)
    }, 3000);
  }

if(data !== null)
  
  return (
    <Modal open={props.open} >
      
        <Stack sx={{position:'absolute',top:"50%",left:'50%',transform:'translate(-50%,-50%)',backgroundColor:"#fff",p:1,width:500,borderRadius:5}}>
            <Typography sx={{fontSize:20,fontWeight:'bold'}}>Your Booking:</Typography>
            <Stack sx={{p:2}}>
            <Stack sx={{flexDirection:'row',justifyContent:'space-between'}}>
              <Typography sx={{fontSize:50,fontWeight:'bold',color:c.light}}>{data.flight.from}</Typography>

              <Typography sx={{fontSize:50,fontWeight:'bold',color:c.light}}>{data.flight.to}</Typography>
            </Stack>
            
              <Typography sx={{fontSize:15,fontWeight:'bold'}}>Passengers Details: </Typography>
              <Stack sx={{p:1,height:200}}>
              <Stack sx={{flexDirection:'row',mb:1,justifyContent:'space-between'}}>
                <Typography sx={{fontWeight:'bold',width:150}}>Name</Typography>
                <Typography sx={{fontWeight:'bold',width:50}}>Age</Typography>
                <Typography sx={{fontWeight:'bold',width:50}}>Seat</Typography>
                
              </Stack>
              {data.passengers.map((item,index)=>{
                return(
                <Stack key={index} sx={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Typography sx={{width:150}}>{item.name}</Typography>
                  <Typography sx={{width:50}}>{item.age}</Typography>
                  <Typography sx={{width:50}}>{item.seats}</Typography>
                  
                </Stack>
                )
              })}
            </Stack>
            <Typography sx={{textAlign:'center',mt:2,fontSize:50,fontWeight:'bold',color:data.status==props.status?'green':'red'}}>{data.status==props.status?data.status:'Invalid Request'}</Typography>
            </Stack>
            {Timer()}
        </Stack>
        
    </Modal>
  )
}

export default BookingInfo