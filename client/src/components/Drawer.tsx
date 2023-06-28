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
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material';
function mapIcon(icon: string){
    if(icon === 'AddBusinessIcon'){
        return (<AddBusinessIcon />)
    }
    return (<></>)
     
}
const StyledNavLink = styled(NavLink)(() => ({
    color: 'inherit',
    textDecoration: 'none',
    display: 'block'
}))
export default function MenuDrawer({isOpen, menu, toggleDrawer}: DrawerProp) {
 
  const list = (menu: Array<MenuOption>) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        {menu.map((option, index) => {
          
          return(
            <StyledNavLink key = {`link-${option.text}-${index}`} to={option.path}   
              style={({ isActive }) => {
                return {
                  backgroundColor : isActive ? '#e0f2f1' : "inherit",
                };
              }}>
              <ListItem  key={`list-${option.text}-${index}`} disablePadding>
                    {option.icon && <ListItemButton>
                    <ListItemIcon>
                      {mapIcon(option.icon)}
                    </ListItemIcon>
                    <ListItemText primary={option.text} 
                    />
                  </ListItemButton>}
              </ListItem>
            </StyledNavLink>
          
        )})}
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
