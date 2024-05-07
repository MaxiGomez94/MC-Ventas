
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

const Navlist = ({navLinks}) => {
  return (
    <Box sx={{ width: 250}}>
      <nav>
        <List>
          {
            navLinks.map(item =>(
              <ListItem disablePadding key={item.title}>
               <ListItemButton component="a" href={item.path}>
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
