import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button, 
  TextField,
  Paper, 
  Box,
  Grid,
  Typography,
  Container,
} from '@mui/material';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <>
    <Container maxWidth='xs' sx={{
      mt:10 ,
      mb:15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent:'center'
    }}>
    <Grid container spacing={1}>
      
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} component={Paper} elevation={6} 
        >
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5">
              Register
            </Typography>
            <Box component="form"  onSubmit={registerUser} sx={{ mt: 1 }}>
              <TextField
              value={username}
              onChange={(event) => setUsername(event.target.value)}
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete='off'
                autoFocus
              />
              <TextField
              value={password}
              onChange={(event) => setPassword(event.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, p:2}}
              >
               Register
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      </Container>


{/* 
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
            />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
            />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form> */}
    </>
  );
}

export default RegisterForm;
