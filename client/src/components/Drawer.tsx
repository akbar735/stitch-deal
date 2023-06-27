import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { DrawerProp } from '../types/DrawerTypes';
import { MenuOption } from '../types/DrawerTypes';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

function map(icon: string){
    if(icon === 'AddBusinessIcon'){
        return (<AddBusinessIcon />)
    }
    return (<></>)
     
}
export default function MenuDrawer({isOpen, menu, toggleDrawer}: DrawerProp) {
  console.log("isOpen::",isOpen)
  const list = (menu: Array<MenuOption>) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        {menu.map((option, index) => (
          <ListItem key={option.text} disablePadding>
            {option.icon && <ListItemButton>
              <ListItemIcon>
                {map(option.icon)}
              </ListItemIcon>
              <ListItemText primary={option.text} />
            </ListItemButton>}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={'left-drawer'}>
          <Drawer
            open={isOpen}
            onClose={() => toggleDrawer(false)}
          >
            {list(menu)}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
