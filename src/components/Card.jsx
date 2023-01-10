import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { width } from '@mui/system';

export default function CardComp({title, link}) {
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
        <Button size="small"> <DeleteIcon /> </Button>
      </CardActions>
    </Card>
  );
}





// import React from 'react'

// const Card = ({title, link}) => {
//   return (
//     <div>
//         <h2>{title}</h2>
//         <p>{link}</p>
//     </div>
//   )
// }

// export default Card