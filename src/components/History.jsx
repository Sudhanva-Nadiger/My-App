import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { HistoryRounded } from '@mui/icons-material'
import HistoryCard from './HistoryCard'
import { selectAllHistory, addToHitory } from '../features/historySlice'
import { useDispatch, useSelector } from 'react-redux'

const History = () => {
  const [modalComponent, setModal] = useState("");
  const dispatch = useDispatch() /* TODO: use dispatch for delete feature */
  const historyArr = useSelector(selectAllHistory)
  return (
    <Box sx={{ position: 'relative', p: '1rem', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4"><HistoryRounded sx={{ fontSize: 'inherit', verticalAlign: 'middle' }} /> History</Typography>
      <Grid sx={{ height: '100%' ,mt: '1rem', py: '1rem', px: "2rem", alignContent: 'start' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
           historyArr.map((card, index)=>{
                return (
                  <HistoryCard  id={card.id} index={index} key={card.id} title={card.title} link={card.link} time={card.time} setModal={setModal} /> /* TODO: time */
                )
           })
        }
      </Grid>
      {modalComponent}
    </Box>
  )
}

export default History