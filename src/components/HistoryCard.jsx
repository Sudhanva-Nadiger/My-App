import { Delete, Replay } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { addToHitory, deleteFromHistory } from '../features/historySlice'
import { useDispatch } from 'react-redux'
import VideoPlayer from './VideoPlayer'
import Modal from './Modal'
import { formatDistance } from 'date-fns'

const HistoryCard = ({id, title, link, time, setModal, index }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    setModal(<Modal onClose={() => { setModal("") }} open={true} content={<VideoPlayer link={link} />} action={() => {}} />)
    const historyObject = {
      title,
      link,
    }
    handleDelete(index);
    dispatch(addToHitory(historyObject))
  }

  const handleDelete = () => {
    dispatch(deleteFromHistory(index))
  }
 
  
  return (
    <Card sx={{ m: '1rem' }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {link}
            </Typography>
            <br />
            <Typography variant="body" color="text.secondary">
            {
              formatDistance(time, new Date(), {addSuffix: true})
            }
            </Typography>
        </CardContent>

        <CardActions>
            <Button size="small" title="Watch again" onClick={handleClick}><Replay /></Button>
            <Button size="small" title="Delete" onClick={()=>handleDelete(index)}><Delete /></Button>
        </CardActions>
    </Card>
  )
}

export default HistoryCard
