import { Drawer, AppBar, Toolbar, IconButton, Button,Box } from "@mui/material";
import Navlist from "./Navlist";
import { useState } from "react";
import Inbox from "@mui/icons-material/Home";
import User from "@mui/icons-material/Person";
import Article from "@mui/icons-material/Article";
import MenuIcon from '@mui/icons-material/Menu';

const NavDrawer = () => {
    const [open, setOpen] = useState(false);
    const navLinks = [
        {
            title: "Inicio",
            path: "#",
            icon:<Inbox/>
        },
        {
            title: "Catalogo",
            path: "catalog",
            icon:<Article/>
        },
        {
            title: "Login",
            path: "login",
            icon:<User/>
        },
    ];

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                        color="inherit" 
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{display:{xs:"block",sm:"none"}}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button color="inherit" sx={{ flexGrow: 1 }}>Logo</Button>
                    <Box sx={{display:{xs:"none",sm:"block"}}}>

                    {navLinks.map(item => (
                        <Button color="inherit" key={item.title} component="a" href={item.path}>
                            {item.title}
                        </Button>
                    ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
            >
                <Navlist navLinks={navLinks} onClick={() => setOpen(false)} />
            </Drawer>
        </>
    );
};

export default NavDrawer;
