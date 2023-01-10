import React, {useRef, useState} from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {IconButton, ListItem, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Delete, Done} from "@mui/icons-material";
import Edit from "@mui/icons-material/Edit";

export default function ListItemComp({bucket, bgColor, setActive, setCards, active }) {
    const inputRef = useRef();
    const [edit, setEdit] = useState(false);
    bgColor = !edit ? bgColor : ""
    const toggleEdit = () => setEdit(!edit)
    const onDone = () => {
        toggleEdit()
        const div = inputRef.current;
        const value = div.querySelector('input').value
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
                        edit ? <><TextField ref={inputRef} /></> : <Typography>{bucket.name}</Typography>
                    }
                </ListItemText>
                {
                    edit && <Done onClick={onDone}/>
                }
                {
                    (active === bucket.id) &&
                    <>
                        <IconButton>
                            {
                                !edit && <Edit onClick={toggleEdit}/>
                            }
                        </IconButton>
                        <IconButton>
                        <Delete />
                        </IconButton>
                    </>
                }
            </ListItemButton>
        </ListItem>
    )
}