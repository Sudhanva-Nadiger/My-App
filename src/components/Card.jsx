import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCard } from '../features/bucketSlice'
import {ItemTypes} from '../features/dragTypes'
import { useDrag } from 'react-dnd';
import VideoPlayer from './VideoPlayer';
import Modal from './Modal';
import { addToHitory } from '../features/historySlice'

export default function CardComp({title, link, cardIndex, bucketIndex, setDeleteCardClicked, setModal, cardId }) {
  const disPatch = useDispatch()
  const id = cardIndex;

  /* modal logic */
  const handleClick = () => {
    setModal(<Modal onClose={() => { setModal("")}} open={true} content={<VideoPlayer link={link} />} action={() => {}} />)
   
    const historyObject = {
      cardId,
      title, 
      link,
    }
    disPatch(addToHitory(historyObject))
  }

  /* DnD Drop Source */
  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))

  return (
    <Card style={{marginLeft:"10px", marginTop: '1rem'}} sx={{ maxWidth: 250, height: 'min-content', opacity: isDragging ? 0.5 : 1 }} ref={drag}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {link}
        </Typography>
      </CardContent>
      
      <CardActions style={{
        display:"flex",
        alignItems : "flex-end",
        justifyContent: "center",
      }} >
        <Button size="small" onClick={handleClick}>Watch</Button>
        <Button size="small" > <EditIcon /></Button>
        <Button onClick={()=>{
          disPatch(deleteCard({bucketIndex, cardIndex}))
          setDeleteCardClicked(true)
        }} size="small"> <DeleteIcon /> </Button>
      </CardActions>
    </Card>
  );
}

