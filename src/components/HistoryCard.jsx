import { Delete, Replay } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

const HistoryCard = ({ title, link, time }) => {
  return (
    <Card>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {link}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {time}
            </Typography>
        </CardContent>

        <CardActions>
            <Button size="small" title="Watch again"><Replay /></Button>
            <Button size="small" title="Delete"><Delete /></Button>
        </CardActions>
    </Card>
  )
}

export default HistoryCard


/* setModal(<Modal onClose={() => { setModal("")}} open={true} content={<VideoPlayer link={link} />} action={() => {}} />) */