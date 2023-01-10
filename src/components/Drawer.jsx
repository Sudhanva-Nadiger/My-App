import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import { useSelector, useDispatch } from 'react-redux';
import { allBuckets } from '../features/bucketSlice';
import { selectToggler, toggleDrawer } from '../features/toggleSlice.js'
import Cards from './Cards'
import {IconButton, Toolbar} from "@mui/material";
import { Close, Add }  from '@mui/icons-material'
import ListItem from './ListItem.jsx'
import {useCallback} from "react";

const drawerDefaultWidth = 240;
const drawerMinWidth = 80;
const drawerMaxWidth = 600;

const draggerStyles = {
    width: "8px",
    cursor: "ew-resize",
    padding: "4px 0 0",
    borderTop: "1px solid #ddd",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 11100,
    backgroundColor: "#e4e7e9"
}

const handleClose = (dispatch, open) => dispatch(toggleDrawer(!open))

function ResponsiveDrawer() {
  const [cards, setCards] = React.useState([]);
  const [active, setActive] = React.useState("");
  const [drawerWidth, setWidth] = React.useState(drawerDefaultWidth)
  const buckets = useSelector(allBuckets)
  const mobileOpen = useSelector(selectToggler)
  const dispatch = useDispatch()

/* make the drawer resizable */
    const handleMouseDown = e => {
        document.addEventListener("mouseup", handleMouseUp, true);
        document.addEventListener("mousemove", handleMouseMove, true);
    };

    const handleMouseUp = () => {
        document.removeEventListener("mouseup", handleMouseUp, true);
        document.removeEventListener("mousemove", handleMouseMove, true);
    };

    const handleMouseMove = useCallback(e => {
        const newWidth = e.clientX - document.body.offsetLeft;
        if (newWidth > drawerMinWidth && newWidth < drawerMaxWidth) {
            setWidth(newWidth);
        }
    }, []);



    const drawer = (
    <div>
      <Toolbar sx={{ justifyContent: 'space-evenly' }}>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton
            onClick={() => handleClose(dispatch, mobileOpen)}
            sx={{ display: { sm: 'none' }}}
        >
          <Close />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {buckets.map((bucket, index) => {
          const bgColor = active === bucket.id ? "#2196f3":"";
          return (
              <ListItem key={bucket.id} index={index} bucket={bucket} bgColor={bgColor} setActive={setActive} setCards={setCards} active={active} />
          )
        })}
      </List>
    </div>
  );

  return (
    <div style={{ display: 'flex' }}>
      <Box sx={{ display: 'flex' }}>
        {/* <CssBaseline /> */}

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, position: 'relative' }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={() => handleClose(dispatch, mobileOpen) }
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {  width: drawerWidth, position: 'relative', height: '100vh', pb: '6rem', overflowY:'auto' },
            }}
            open
          >
            {drawer}
              <div style={draggerStyles} onMouseDown={e => handleMouseDown(e)} className="dragger" />
          </Drawer>
        </Box>
      </Box>
      <Cards cards={cards} />
    </div>
  );
}

export default ResponsiveDrawer;
