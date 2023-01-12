import React, { useRef, useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, ListItem, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Delete, Done } from "@mui/icons-material";
import Edit from "@mui/icons-material/Edit";
import { useDispatch } from 'react-redux'
import { editBucketName, deleteBucket, toggleInitialEditValue, deleteCard, addCard } from '../features/bucketSlice'
import { useDrop } from "react-dnd";
import { ItemTypes } from '../features/dragTypes'

export default function ListItemComp({rerenderOnce, initialEditValue, index, bucket, bgColor, setActive, setCards, active }) {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(initialEditValue ? initialEditValue : false);
    dispatch(toggleInitialEditValue({index}))
    const [value, setValue] = useState(bucket.name)
    bgColor = !edit ? bgColor : ""

    console.log(active);
    const toggleEdit = () => setEdit(!edit)

    const onDone = () => {
        toggleEdit()
        const editedName = value

        dispatch(editBucketName({ editedName, id: bucket.id }))
    }
    const handleChange = e => {
        setValue(e.target.value);
    }

     /* TODO: move card to current bucket */
    const handleMoveCard = (item, active) => {
        console.log(active, index);
        if((active !== index) && (active !== -1)){
            console.log(index,active, 'enter');
            dispatch(deleteCard({ bucketIndex: active, cardIndex: item.cardIndex}));
            dispatch(addCard({bucketIndex:index, title: item.title, link: item.link}))
            rerenderOnce(true)
        }
    };

    /* DnD Drop Target */
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => handleMoveCard(item, active),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }), [active])

    return (
        <ListItem ref={drop} disablePadding
            style={{
                backgroundColor: `${bgColor}`,
                color: `${bgColor === "" ? "inherit" : "white"}`,
                outline: isOver ? "2px dotted red" : "",
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