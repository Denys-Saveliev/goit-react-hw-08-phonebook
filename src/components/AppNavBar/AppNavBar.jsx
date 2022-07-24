import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, getCurrentStatus, logOut } from 'redux/auth/authSlice';

export const AppNavBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getCurrentStatus);
  const [anchorEl, setAnchorEl] = useState(null);
  let navigate = useNavigate();
  const name = useSelector(getCurrentUser);
  const avatarName = name && name[0];
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = event => {
    setAnchorEl(null);
  };

  const theme = createTheme({
    typography: {
      fontFamily: 'Comfortaa, cursive',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          mb: 3,
          background: '#b39e9e',
          color: '#00000080',
          borderRadius: '10px',
          pt: 1.5,
          pb: 1.5,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="contacts"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: 1,
                fontSize: '26px',
              }}
            >
              Phonebook
            </Typography>

            {isLoggedIn ? (
              <>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 0, mr: 2 }}
                >
                  {name}
                </Typography>
                <Box sx={{ flexGrow: 0, ml: 'auto' }}>
                  <Tooltip title="Profile menu">
                    <IconButton
                      onClick={handleMenu}
                      sx={{
                        p: 0,
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: '#00000080',
                          color: ' #b39e9e',
                        }}
                      >
                        {avatarName}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={() => {
                        dispatch(logOut());
                        handleClose();
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: 'center',
                          color: '#00000080',
                        }}
                      >
                        Logout
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              </>
            ) : (
              <>
                <Button
                  sx={{ fontWeight: '700' }}
                  color="inherit"
                  onClick={() => navigate('/register')}
                >
                  Sign UP
                </Button>
                <Button
                  sx={{ fontWeight: '700' }}
                  color="inherit"
                  onClick={() => navigate('/login')}
                >
                  Sign IN
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
