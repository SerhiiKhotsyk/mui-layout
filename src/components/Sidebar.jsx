import { AccountBox, Article, Brightness4, Group, Home, Person, Settings, Storefront } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Switch } from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../hoc/DarkModeProvider";

const Sidebar = () => {
    const {mode, handleMode} = useContext(DarkModeContext);
    return (
        <Box flex={1} sx={{ display: { xs: 'none', sm: 'block' }, minWidth: '135px', pl: 2 }} >
            <Box position='fixed'>
                <List >
                    <ListItem disablePadding >
                        <ListItemButton component='a' href="#home" sx={{px: {xs: 0, lg: 2}}} >
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href="#pages" sx={{px: {xs: 0, lg: 2}}} >
                            <ListItemIcon>
                                <Article />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href="#groups" sx={{px: {xs: 0, lg: 2}}} >
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href="#marketplace" sx={{px: {xs: 0, lg: 2}}} >
                            <ListItemIcon>
                                <Storefront />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href="#friends" sx={{px: {xs: 0, lg: 2}}} >
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href="#settings" sx={{px: {xs: 0, lg: 2}}} >
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href="#profile" sx={{px: {xs: 0, lg: 2}}} >
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href="#mode" sx={{px: {xs: 0, lg: 2}}} >
                            <ListItemIcon>
                                <Brightness4 />
                            </ListItemIcon>
                            <Switch checked={mode === 'dark'} onChange={() => handleMode()} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default Sidebar;