import React from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import { useNavigate, Link } from "react-router-dom";


const ForgotPasswordPage = () => {
    const navigate = useNavigate();
    return (
        <Container component="main" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <div style={{
                width: '50%',
                marginTop: 1,
                padding: 2,
            }}>
                <Typography component="h1" variant="h5" color="primary">
                    Forgot Password
                </Typography>
                <TextField
                    variant="outlined"
                    inputProps={{
                        style: {
                            color: "#4cceac"
                        }
                    }}
                    margin="normal"
                    required
                    focused
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
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
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{ margin: (3, 0, 2) }}
                    onclick={()=> navigate('/login')}
                >
                    <Link to="/login">Submit</Link> 
                </Button>
                {/* <div style={{
                    marginTop: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Link href="#" variant="body2">
                        Back to Login
                    </Link>
                </div> */}
            </div>
        </Container>
    );
};

export default ForgotPasswordPage;
