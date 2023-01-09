import React from 'react'
import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: '0.2rem', bgcolor: '#efefef', zIndex:1201 }}>
        <Typography sx={{ textAlign: 'center', verticalAlign: 'middle' }}>Footer text here</Typography>
      </Box>
  )
}

export default Footer