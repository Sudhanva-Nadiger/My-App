import React, { useRef, useState } from 'react'
import Card from './Card'
import {Box, Fab, Grid} from "@mui/material";
import {Add} from "@mui/icons-material";
import EditCard from './EditCard';
import Modal from "./Modal.jsx";
import { useDispatch } from 'react-redux';
import { addCard } from '../features/bucketSlice';

const Cards = ({cards, bucketIndex, rerenderOnce}) => {
  const dispatch = useDispatch()
  const [modalComponent, setComponent] = useState("")
  const editCardRef = useRef()

  const handleAddcard = () => {
    setComponent(<Modal onClose={() => { setComponent("")}} open={true} content={<EditCard ref={editCardRef} bucketIndex={bucketIndex} />} action={() => {
      const inputs = editCardRef.current.querySelectorAll('input')
      let title = inputs[0].value
      let link = inputs[1].value
      dispatch(addCard({title, link, bucketIndex}))
      rerenderOnce(true)
    }} actionText="Submit" />)
  }
  return (
    <Box sx={{ position: 'relative', flexGrow: 1, p: '0.5rem', display: 'flex', flexDirection: 'column' }}>
      <Grid sx={{ height: '100%' ,mt: '0.5rem', p: '1rem', alignContent: 'start' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
           cards.map((card, index)=>{
                return (
                    <Card cardId={card.id} rerenderOnce={rerenderOnce} key={card.id} title={card.title} link={card.link} cardIndex={index} bucketIndex={bucketIndex} setModal={setComponent}  />
                )
           })
        }
      </Grid>
      {/* <Modal onClose={() => {}} open={true} content={<VideoPlayer />} action={() => {}} actionText="Submit" /> */}
      {modalComponent}
        {
            bucketIndex !== -1 &&
          <Fab onClick={()=>handleAddcard(bucketIndex)} color="primary" aria-label="add" sx={{ position: 'fixed', right: '2.5rem', bottom: '2.5rem' }}>
            <Add />
          </Fab>
        }
    </Box>
  )
}

export default Cards
