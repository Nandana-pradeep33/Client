import * as React from 'react';
import  { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';

import { useHistory } from 'react-router-dom';


import { useNavigate, useLocation } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  display: 'flex',
  alignItems: 'center',
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '70%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '8ch',
    },
  },
}));

const pages = ['', '', ''];
const settings = ['Profile',  'Logout'];

function ResponsiveAppBar({email}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
 // Use useHistory hook
  const navigate = useNavigate();  // Use useHistory hook
  const location = useLocation()

  

  const handleCloseUserMenu = () => {
    
      setAnchorElUser(null);
      // Handle other menu options
   
  };

  const handleLogout = () => {
    // Clear authentication state (example)
   // Update state to indicate user is not authenticated
setIsAuthenticated(false);
localStorage.removeItem('isAuthenticated');

    // Redirect to the login page
    console.log('Is authenticated:', isAuthenticated);

    navigate('/'); 
};
const handleProfile= () => {
   // Clear authentication state (example)
  // Update state to indicate user is not authenticat
  console.log("Navigating to profile page")
  navigate(`/Main/profile2?email=${email}`); 
};

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 const handleHome =() =>{
  if (location.pathname.startsWith('/Main/SkillList')) {
    const parts = location.pathname.split('/');
    if (parts.length === 4) {
      // /Main/SkillList:title
      navigate(-1);
    } else {
      // /Main/SkillList/...
      navigate(-3);
    }
  } 
  else if (location.pathname.startsWith('/Main/profile2')) {
    navigate(-1);
  }
 }


 const handleSearch = () => {
  // Implement your search logic here
  navigate(`/Main/SkillList/${searchQuery}`);
  console.log('Searching for:', searchQuery);
};



  return (
    <AppBar position="static" sx={{ backgroundColor: '#2d3748' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handleHome}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor:'pointer',
            }}
          >
            CLASSMATE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none',lg:'none', },
              }}
            >
              
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
              
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
  <Search>
  <SearchIconWrapper>
    <IconButton onClick={handleSearch} aria-label="search">
      <SearchIcon />
    </IconButton>
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    
  </Search>
</Box>
          <Box sx={{ flexGrow: 0 }}>
          
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp"  />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             {settings.map((setting) => (
  (location.pathname.startsWith('/Main/profile2') || location.pathname.startsWith('/Main/SkillList')) ? (
    setting === 'Logout' && (
      <MenuItem key={setting} onClick={handleLogout}>
        <Typography textAlign="center">{setting}</Typography>
      </MenuItem>
    )
  ) : (
    <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : handleProfile}>
      <Typography textAlign="center">{setting}</Typography>
    </MenuItem>
  )
))}
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
