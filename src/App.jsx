import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import CheckIn from './screens/CheckIn'
import Security from './screens/Security'
import OnBoard from './screens/OnBoard'
import Boarding from './screens/Boarding'
import Home from './screens/Home'
import { Stack } from '@mui/material'
import Header from './components/Header'

function App() {
 

  return (
    <Stack sx={{p:3}}>
      <Header/>
      <Stack>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/check-in' element={<CheckIn/>} />
      <Route path='/security' element={<Security/>} />
      <Route path='/boarding' element={<Boarding/>} />
      <Route path='/on-board' element={<OnBoard/>} />
    </Routes>
    </Stack>
    </Stack>
  )
}

export default App
