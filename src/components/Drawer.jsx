import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { useSelector, useDispatch } from 'react-redux';
import { allBuckets } from '../features/bucketSlice';
import { selectToggler, toggleDrawer } from '../features/toggleSlice.js'
import Cards from './Cards'
import {IconButton, Toolbar} from "@mui/material";
import { Close, Add }  from '@mui/icons-material'
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

const handleClose = (dispatch, open) => dispatch(toggleDrawer(!open))

function ResponsiveDrawer() {
  const [cards, setCards] = React.useState([]);
  const [active, setActive] = React.useState("");
  const buckets = useSelector(allBuckets)
  const mobileOpen = useSelector(selectToggler)
  const dispatch = useDispatch()

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
        {buckets.map((bucket) => {
          const bgColor = active === bucket.id ? "#2196f3":"";
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
                <ListItemText primary={bucket.name} />
              </ListItemButton>
            </ListItem>
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
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
          </Drawer>
        </Box>
      </Box>
        <Cards cards={cards} />

    </div>
  );
}

export default ResponsiveDrawer;
