import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { HistoryRounded } from '@mui/icons-material'
import HistoryCard from './HistoryCard'

const History = () => {
  return (
    <Box sx={{ position: 'relative', p: '1rem', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4"><HistoryRounded sx={{ fontSize: 'inherit', verticalAlign: 'middle' }} /> History</Typography>
      <Grid sx={{ height: '100%' ,mt: '1rem', py: '1rem', px: "2rem", alignContent: 'start' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
           [{title: "Card", link: "value", time: "5 sec ago"}].map((card, index)=>{
                return (
                  <HistoryCard title={card.title} link={card.link} time={card.time} />
                )
           })
        }
      </Grid>
    </Box>
  )
}

export default History