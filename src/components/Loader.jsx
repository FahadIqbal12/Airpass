import { CircularProgress, Modal, Stack } from '@mui/material'
import React from 'react'

const Loader = (props) => {
  return (
    <Modal open={props.open}>
        <Stack sx={{position:'absolute',top:"50%",left:'50%',transform:'translate(-50%,-50%)',backgroundColor:"#fff",p:1,borderRadius:10}}>
            <CircularProgress/>
        </Stack>
    </Modal>
  )
}

export default Loader