
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Navlist = ({navLinks,setOpen}) => {
  return (
    <Box sx={{ width: 250}}>
      <nav>
        <List>
          {
            navLinks.map(item =>(
              <ListItem disablePadding key={item.title}>
               <ListItemButton component={NavLink} to={item.path} onClick={()=> setOpen(false)}>
              <ListItemIcon> {item.icon}</ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>

            ))
          }
        </List>
      </nav>
    </Box>
  );
};

export default Navlist;
