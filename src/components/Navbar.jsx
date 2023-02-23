import { Email, Notifications, Pets, Search as SearchIcon } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Menu, MenuItem, Stack, styled, Toolbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '100%',
}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.down('sm')]: {
    gap: '5px'
  }
}))


const Navbar = ({ setIsScrollVisible, ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsScrollVisible ? setIsScrollVisible(false) : setIsScrollVisible(true)
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsScrollVisible(true)
  };
  
  return (
    <>
      <AppBar position="fixed" >
        <StyledToolbar>
          <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }} >MUI Social</Typography>
          <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
          <Stack direction="row" spacing={1} alignItems="center" width='40%' maxWidth='400px' >
            <SearchIcon />
            <Search>
              <InputBase sx={{ color: 'black' }} placeholder="search..." />
            </Search>
          </Stack>
          <Icons >
            <IconButton href="#text-buttons" sx={{ display: { xs: 'none', sm: 'block' } }} >
              <Badge badgeContent={4} color="error" max={9} >
                <Email sx={{ fontSize: 27, color: 'white' }} />
              </Badge>
            </IconButton>
            <IconButton href="#text-buttons" sx={{ mr: '10px', display: { xs: 'none', sm: 'block' } }}>
              <Badge badgeContent={2} color="error" >
                <Notifications sx={{ fontSize: 27, color: 'white' }} />
              </Badge>
            </IconButton>
            <Typography variant='span' sx={{ display: { xs: 'block', sm: 'none' } }}>Serhii</Typography>
            <Tooltip title='Account settings' >
              <Avatar
                onClick={handleClick}
                sx={{ width: 50, height: 50 }}
                alt='Avatar'
                src='https://avatars.githubusercontent.com/u/120179873?s=400&u=cb986c207ab226eea7060d3fb54265c0e9c0b40b&v=4' />
            </Tooltip>
          </Icons>
          <Menu
            sx={{ mt: '10px' }}
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
          </Menu>
        </StyledToolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Navbar;