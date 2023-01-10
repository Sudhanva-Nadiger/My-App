import React from 'react'
import Card from './Card'
import {Box, Fab, Grid} from "@mui/material";
import {Add} from "@mui/icons-material";

const Cards = ({cards}) => {

  return (
    <Box sx={{ position: 'relative', flexGrow: 1, p: '0.5rem', display: 'flex', flexDirection: 'column' }}>
      <Grid sx={{ height: '100%' ,mt: '0.5rem', p: '1rem', alignContent: 'start' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
           cards.map((card)=>{
                return (
                    <Card key={card.link} title={card.title} link={card.link} />
                )
           })
        }
      </Grid>
      <Fab color="primary" aria-label="add" sx={{ position: 'fixed', right: '2.5rem', bottom: '2.5rem' }}>
        <Add />
      </Fab>
    </Box>
  )
}

export default Cards