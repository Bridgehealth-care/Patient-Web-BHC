import { Box, Button, Typography } from "@mui/material";
import React from "react";

import LogoBhc from "./Images/LogoBHC.gif";
import MailTwoToneIcon from "@mui/icons-material/MailTwoTone";
import LockIcon from "@mui/icons-material/Lock";

import CorporateFareTwoToneIcon from "@mui/icons-material/CorporateFareTwoTone";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

import { useState } from "react";
import { borderRadius } from "@mui/system";
const Signup = () => {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    CardNumber: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Box m="20px" height="97vh" width="80vw" display="flex">
      <Box sx={{ border: "1px solid #d5d5d5" }} width="40vw">
        <Box
          height="80%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Typography variant="h3" sx={{ m: "0 0 5px 0" }}>
              Bharat TT 
            </Typography>
          </Box>
          <img src={LogoBhc} width={160} alt={"img"} />
        </Box>
      </Box>
      <Box sx={{ border: "1px solid #d5d5d5" }} width="40vw">
        <Box
          m="10px"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            height="14vh"
            width="90%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box>
              <Typography variant="h2" sx={{ m: "0 0 5px 0" }}>
                Sign up
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ m: "0 0 5px 0" }}
                textAlign="center"
              >
                Did you know we should drink eight glasses of water a day
                everyday
              </Typography>
            </Box>
          </Box>
          <Box m="10px" height="70vh">
            <Box>
              <FormControl sx={{ m: 1, width: "60ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={"text"}
                  value={values.CardNumber}
                  onChange={handleChange("CardNumber")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="start">
                        <MailTwoToneIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl sx={{ m: 1, width: "60ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Phone Number
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={"text"}
                  value={values.CardNumber}
                  onChange={handleChange("CardNumber")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="start">
                        <CorporateFareTwoToneIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl sx={{ m: 1, width: "60ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Oganization Id
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={"text"}
                  value={values.CardNumber}
                  onChange={handleChange("CardNumber")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="start">
                        <CorporateFareTwoToneIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl sx={{ m: 1, width: "60ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="start">
                        <LockIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl sx={{ m: 1, width: "60ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                 Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="start">
                        <LockIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button
                variant="contained"
                color="success"
                sx={{ width: 230, height: 43, borderRadius: "13px" }}
              >
                Sign in
              </Button>
            </Box>
            <Box height="20vh">
              <Box
                m="15px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography>Already have an account? </Typography>
                <Typography ml="5px" variant="h5">
                  Login here
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
