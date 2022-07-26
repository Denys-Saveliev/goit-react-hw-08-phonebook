import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { useLoginUserMutation } from 'redux/auth/authApiSlice';
import { setCredentials } from 'redux/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createTheme } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="#00000080" align="center" {...props}>
      {'Created by '}
      <Link color="inherit" href="https://github.com/Denys-Saveliev">
        Denys Saveliev
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#b39e9e',
      contrastText: '#00000080',
    },
  },
  typography: {
    fontFamily: 'Comfortaa, cursive',
  },
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser, { isUninitialized }] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const userData = await loginUser({ email, password }).unwrap();
    dispatch(setCredentials({ ...userData, email }));
    setEmail('');
    setPassword('');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#b39e9e' }}>
            <LockOutlinedIcon sx={{ color: '#00000080' }} />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: '#00000080' }}>
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontWeight: '700' }}
              disabled={!isUninitialized}
            >
              Sign In
            </Button>
            <Grid container sx={{ textAlign: 'center' }}>
              <Grid item xs>
                <Link
                  href="/goit-react-hw-08-phonebook/register"
                  variant="body2"
                  color="#b39e9e"
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
