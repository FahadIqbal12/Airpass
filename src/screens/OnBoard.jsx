import React, { useEffect, useState } from 'react'
import { Stack, Typography } from '@mui/material'
import QrScanner from '../components/QrScanner'
import BookingInfo from '../components/BookingInfo'
import Loader from '../components/Loader'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../config'

const OnBoard = () => {
  const [loader,setLoader] = useState(false)
  const [result,setResult] = useState(null)
  const [bookingInfo,setBookingInfo] = useState(false)
  const [BookingData,setBookingData] = useState(null)

  let r = JSON.parse(result)

  const onBoard =async ()=>{
    if(result !== null){
    setLoader(true)
    const bookingDocRef = doc(db,"bookings",r.booking_id)
    const bds = await getDoc(bookingDocRef)
    if(bds.exists()){
      let d = bds.data()
      if(d.status == 'Boarding'){
        await updateDoc(bookingDocRef,{status:'On Board'}).then(async()=>{
          const bookingDocSnap = await getDoc(bookingDocRef)
          if (bookingDocSnap.exists()) {
            setBookingData(bookingDocSnap.data())
            setLoader(false)
            setBookingInfo(true)
          } 
        })
      }else{
        setBookingData(bds.data())
        setLoader(false)
        setBookingInfo(true)
      }
    }
  }
  }

  useEffect(()=>{
    onBoard()
  },[result])
  

  return (
    <Stack sx={{mt:5,p:1}}>
      <Loader open={loader} />
      <BookingInfo open={bookingInfo} data={BookingData} status={'On Board'} visible={setBookingInfo}/>
      <Typography sx={{fontSize:20,fontWeight:'bold'}}>On Board</Typography>
      <Stack >
        <QrScanner set={setResult} />
        
      </Stack>
      
      
    </Stack>
  )
}

export default OnBoard