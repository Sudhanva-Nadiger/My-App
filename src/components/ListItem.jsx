import React, { useRef, useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, ListItem, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Delete, Done } from "@mui/icons-material";
import Edit from "@mui/icons-material/Edit";
import { useDispatch } from 'react-redux'
import { editBucketName, deleteBucket } from '../features/bucketSlice'

export default function ListItemComp({ initialEditValue, index, bucket, bgColor, setActive, setCards, active }) {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(initialEditValue ? initialEditValue : false);
    const [value, setValue] = useState(bucket.name)
    bgColor = !edit ? bgColor : ""

    const toggleEdit = () => setEdit(!edit)

    const onDone = () => {
        toggleEdit()
        const editedName = value

        dispatch(editBucketName({ editedName, id: bucket.id }))
    }
    const handleChange = e => {
        setValue(e.target.value);
    }
    return (
        <ListItem disablePadding
            style={{
                backgroundColor: `${bgColor}`,
                color: `${bgColor === "" ? "inherit" : "white"}`
            }}
            key={bucket.id}
        >
            <ListItemButton onClick={() => {
                setCards(bucket.cards);
                setActive(index)
            }} >
                <ListItemText>
                    {
                        edit ? <><TextField onChange={handleChange} value={value} /></> : <Typography sx={{ overflow: 'hidden', textOverflow: "ellipsis" }}>{bucket.name}</Typography>
                    }
                </ListItemText>
                {
                    edit && <IconButton style={{
                        color: `${bgColor === "" ? "inherit" : "white"}`
                    }} onClick={onDone}><Done /></IconButton>
                }
                {
                    (active === index) &&
                    <>
                        <IconButton style={{
                            color: `${bgColor === "" ? "inherit" : "white"}`
                        }} onClick={toggleEdit}>
                            {
                                !edit && <Edit />
                            }
                        </IconButton>
                        <IconButton style={{
                            color: `${bgColor === "" ? "inherit" : "white"}`
                        }} onClick={(e) => {
                            e.stopPropagation()
                            setCards([])
                            dispatch(deleteBucket({ index }));
                        }}>
                            <Delete style={{
                                color: `${bgColor === "" ? "inherit" : "white"}`
                            }} />
                        </IconButton>
                    </>
                }
            </ListItemButton>
        </ListItem>
    )
}