import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../features/bucketSlice'
export default function CardComp({title, link, cardIndex, bucketIndex, setDeleteCardClicked}) {
  const disPatch = useDispatch()

  return (
    <Card style={{marginLeft:"10px", marginTop: '1rem'}} sx={{ maxWidth: 250, height: 'min-content' }}>
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
        <Button size="small">Watch</Button>
        <Button size="small"> <EditIcon /></Button>
        <Button onClick={()=>{
          disPatch(deleteCard({bucketIndex, cardIndex}))
          setDeleteCardClicked(true)
        }} size="small"> <DeleteIcon /> </Button>
      </CardActions>
    </Card>
  );
}
