import { Drawer, AppBar, Toolbar, IconButton, Button, Box,} from "@mui/material";
import Navlist from "./Navlist";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

const NavDrawer = ({ navLinks }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" sx={{ flexGrow: 1 }}>
            Logo
          </Button>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map(item => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>

        <Navlist navLinks={navLinks} setOpen={setOpen} />
      </Drawer>
    </>
  );
};

export default NavDrawer;
