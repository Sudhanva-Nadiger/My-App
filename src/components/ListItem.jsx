import React, {useRef, useState} from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {IconButton, ListItem, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Delete, Done} from "@mui/icons-material";
import Edit from "@mui/icons-material/Edit";
import { useDispatch } from 'react-redux'
import { editBucketName, deleteBucket } from '../features/bucketSlice'

export default function ListItemComp({index, bucket, bgColor, setActive, setCards, active }) {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState(bucket.name)
    bgColor = !edit ? bgColor : ""

    const toggleEdit = () => setEdit(!edit)

    const onDone = () => {
        toggleEdit()
        const editedName = value

        dispatch(editBucketName({editedName, id: bucket.id}))
    }
    const handleChange = e => {
        setValue(e.target.value);
    }
    return (
        <ListItem disablePadding
                  style={{
                      backgroundColor: `${bgColor}`
                  }}
                  key={bucket.id}
        >
            <ListItemButton onClick={() => {
                    setCards(bucket.cards);
                    setActive(bucket.id)
            } } >
                <ListItemText>
                    {
                        edit ? <><TextField onChange={handleChange} value={value} /></> : <Typography>{bucket.name}</Typography>
                    }
                </ListItemText>
                {
                    edit && <IconButton onClick={onDone}><Done/></IconButton>
                }
                {
                    (active === bucket.id) &&
                    <>
                        <IconButton onClick={toggleEdit}>
                            {
                                !edit && <Edit/>
                            }
                        </IconButton>
                        <IconButton onClick={(e)=>{
                            e.stopPropagation()
                            setCards([])
                            dispatch(deleteBucket({index}));
                        }}>
                        <Delete />
                        </IconButton>
                    </>
                }
            </ListItemButton>
        </ListItem>
    )
}