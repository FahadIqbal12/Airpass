import React, { useEffect, useState } from 'react'
import { Stack, Typography } from '@mui/material'
import QrScanner from '../components/QrScanner'
import BookingInfo from '../components/BookingInfo'
import Loader from '../components/Loader'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../config'

const Boarding = () => {
  const [loader,setLoader] = useState(false)
  const [result,setResult] = useState(null)
  const [bookingInfo,setBookingInfo] = useState(false)
  const [BookingData,setBookingData] = useState(null)

  let r = JSON.parse(result)

  const board =async ()=>{
    if(result !== null){
    setLoader(true)
    const bookingDocRef = doc(db,"bookings",r.booking_id)
    const bds = await getDoc(bookingDocRef)
    if(bds.exists()){
      let d = bds.data()
      if(d.status == 'Security Done'){
        await updateDoc(bookingDocRef,{status:'Boarding'}).then(async()=>{
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
    board()
  },[result])
  

  return (
    <Stack sx={{mt:5,p:1}}>
      <Loader open={loader} />
      <BookingInfo open={bookingInfo} data={BookingData} status={'Boarding'} visible={setBookingInfo}/>
      <Typography sx={{fontSize:20,fontWeight:'bold'}}>Boarding</Typography>
      <Stack >
        <QrScanner set={setResult} />
        
      </Stack>
      
      
    </Stack>
  )
}

export default Boarding