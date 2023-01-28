import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, CssBaseline, Typography, TextField, Button } from '@material-ui/core';
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  form: {
    width: '50%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  links: {
    marginTop: theme.spacing(1),
    margin: "auto",
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const SignUpPage = () => {
  // const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Container component="main" className={classes.container}>
      <div className={classes.form}>
        <Typography component="h1" variant="h5" color='primary'>
          Sign Up 
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
          color='primary'
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
          id="phone"
          label="Phone Number"
          name="phone"
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
          id="organization"
          label="Organization ID"
          name="organization"
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
          name="confirmpassword"
          label="Confirm Password"
          type="password"
          id="confirmpassword"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
        <Typography className={classes.links} color='primary' variant="body2">
            <Link to='/login' variant="body2">
              Already a user?
            </Link>
        </Typography>
      </div>
    </Container>
  );
};
export default SignUpPage;