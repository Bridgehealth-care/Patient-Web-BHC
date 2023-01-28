import React from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import { Link } from "react-router-dom";


const Login = () => {

  return (
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <div style={{
        width: '40%',
        marginTop: 1,
        padding: 2,
      }}>
        <Typography component="h1" variant="h5" color='primary'>
          Login
        </Typography>
        <TextField
          variant="outlined"
          inputProps={{
            style: {
              color: "#4cceac"
            }
          }}
          focused
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          color="primary"
        />
        <TextField
          variant="outlined"
          inputProps={{
            style: {
              color: "#4cceac"
            }
          }}
          focused
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          color="primary"
        />

        <Typography style={{
          marginTop: 4,
          display: 'flex',
          justifyContent: 'space-between',
        }}
          color="primary"
          variant="body2"
        >
          <Link to="/forgotpass">
            Forgot password?
          </Link>
          <Link to="/signup">
            Create new account
          </Link>
        </Typography><Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{
            marginTop: "1pc",
          }}
        >
          Sign In
        </Button>
      </div>
    </Container>
  );
};

export default Login;