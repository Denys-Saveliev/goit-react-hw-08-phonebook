import { useState } from 'react';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRegisterUserMutation } from 'redux/auth/authApiSlice';
import { setCredentials } from 'redux/auth/authSlice';
import { useDispatch } from 'react-redux';

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

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const [registerUser, { isUninitialized }] = useRegisterUserMutation();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    const userData = await registerUser({ name, email, password }).unwrap();

    dispatch(setCredentials({ ...userData, email }));

    setName('');
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontWeight: '700' }}
              disabled={!isUninitialized}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link
                  href="/goit-react-hw-08-phonebook/login"
                  variant="body2"
                  color="#b39e9e"
                >
                  Already have an account? Sign in
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
