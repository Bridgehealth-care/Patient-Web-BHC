import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import master from "./Images/master.png";
import visa from "./Images/visa.png";
import upi from "./Images/UPI.png";
import PhonePay from "./Images/PhonePay.png";
import Paytm from "./Images/paytm.png";
import gpay from "./Images/Google_Pay.png";
import ruppe from "./Images/Ruppe.png";
import money from "./Images/Money.png";

import { tokens } from "../../theme";
import Card from "./card";

import { useState } from "react";
import Qrcode from "./Qr";
import Cash from "./Cash";

const Payment = () => {
  const [active, setActive] = useState("two");

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
      <Box
        sx={{
          border: "1px solid #d5d5d5",
        }}
        m="5px"
        height="150vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          sx={{
            border: "1px solid #d5d5d5",
          }}
          m="2px"
          height="130vh"
          color="blueviolet"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              border: "1px solid #d5d5d5",
            }}
            display="flex"
            justifyContent="space-between"
            height="130vh"
            width="90vw"
          >
            <Box
              width="40vw"
              sx={{
                border: "1px solid #d5d5d5",
              }}
            >
              <Box>
                <Box>
                  <Typography
                    variant="h4"
                    height="10vh"
                    textAlign="center"
                    color={colors.grey[100]}
                    sx={{ m: "0 0 5px 0" }}
                  >
                    Appointment Details
                  </Typography>
                </Box>
                <Box
                  height="30vh"
                  sx={{
                    border: "1px solid #d5d5d5",
                  }}
                >
                  <Typography
                    variant="h4"
                    textAlign="center"
                    color={colors.grey[100]}
                    sx={{
                      m: "0 0 5px 0",
                    }}
                  >
                    Doc Details
                  </Typography>
                  <Box display="flex" justifyContent="space-between" m="2px">
                    <Box
                      height="20vh"
                      width="9vw"
                      sx={{
                        border: "1px solid #d5d5d5",
                      }}
                    >
                      <img
                        height="100vh"
                        width="100vw"
                        style={{ borderRadius: "50%" }}
                        src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
                      />
                    </Box>
                    <Box
                      marginLeft="10px"
                      height="20vh"
                      width="35vw"
                      sx={{
                        border: "1px solid #d5d5d5",
                      }}
                    >
                      <Box display="flex" marginLeft="10px">
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 0",
                          }}
                        >
                          Name :
                        </Typography>
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 10px",
                          }}
                        >
                          Sayan Maitra
                        </Typography>
                      </Box>
                      <Box display="flex" marginLeft="10px">
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 0",
                          }}
                        >
                          Specialization :
                        </Typography>
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 10px",
                          }}
                        >
                          Orthopedics
                        </Typography>
                      </Box>
                      <Box display="flex" marginLeft="10px">
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 0",
                          }}
                        >
                          Date :
                        </Typography>
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 10px",
                          }}
                        >
                          11 : 02 : 2002
                        </Typography>
                      </Box>
                      <Box display="flex" marginLeft="10px">
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 0",
                          }}
                        >
                          Time :
                        </Typography>
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 10px",
                          }}
                        >
                          7 PM
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  height="30vh"
                  sx={{
                    border: "1px solid #d5d5d5",
                  }}
                >
                  <Typography
                    variant="h4"
                    textAlign="center"
                    color={colors.grey[100]}
                    sx={{
                      m: "0 0 5px 0",
                    }}
                  >
                    TDM Details
                  </Typography>
                  <Box display="flex" justifyContent="space-between" m="2px">
                    <Box
                      height="20vh"
                      width="9vw"
                      sx={{
                        border: "1px solid #d5d5d5",
                      }}
                    >
                      <img
                        height="100vh"
                        width="100vw"
                        style={{ borderRadius: "50%" }}
                        src="https://st2.depositphotos.com/2777531/7551/v/600/depositphotos_75518405-stock-illustration-businessman-presentation-cartoon.jpg"
                      />
                    </Box>
                    <Box
                      marginLeft="10px"
                      height="20vh"
                      width="35vw"
                      sx={{
                        border: "1px solid #d5d5d5",
                      }}
                    >
                      <Box display="flex" marginLeft="10px">
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 0",
                          }}
                        >
                          Name :
                        </Typography>
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 10px",
                          }}
                        >
                          Sarat Kumar
                        </Typography>
                      </Box>
                      <Box display="flex" marginLeft="10px">
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 0",
                          }}
                        >
                          TDM ID :
                        </Typography>
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 10px",
                          }}
                        >
                          TDM01TD
                        </Typography>
                      </Box>
                      <Box display="flex" marginLeft="10px">
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 0",
                          }}
                        >
                          Location :
                        </Typography>
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 10px",
                          }}
                        >
                          South , Greater Noida
                        </Typography>
                      </Box>
                      <Box display="flex" marginLeft="10px">
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 0",
                          }}
                        >
                          Time :
                        </Typography>
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 10px",
                          }}
                        >
                          7 PM
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  height="30vh"
                  sx={{
                    border: "1px solid #d5d5d5",
                  }}
                >
                  <Typography
                    variant="h4"
                    textAlign="center"
                    color={colors.grey[100]}
                    sx={{
                      m: "0 0 5px 0",
                    }}
                  >
                    Patient Details
                  </Typography>
                  <Box display="flex" justifyContent="space-between" m="2px">
                    <Box
                      height="20vh"
                      width="9vw"
                      sx={{
                        border: "1px solid #d5d5d5",
                      }}
                    >
                      <img
                        height="100vh"
                        width="100vw"
                        style={{ borderRadius: "50%" }}
                        src="https://as2.ftcdn.net/v2/jpg/03/36/08/89/1000_F_336088926_VnRA0ufLH9qrWIPVTEsOTJfSOz3P7DXS.jpg"
                      />
                    </Box>
                    <Box
                      marginLeft="10px"
                      height="20vh"
                      width="35vw"
                      sx={{
                        border: "1px solid #d5d5d5",
                      }}
                    >
                      <Box display="flex" marginLeft="10px">
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 0",
                          }}
                        >
                          Name :
                        </Typography>
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 10px",
                          }}
                        >
                          Munna tripathy
                        </Typography>
                      </Box>
                      <Box display="flex" marginLeft="10px">
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 0",
                          }}
                        >
                          Age :
                        </Typography>
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 10px",
                          }}
                        >
                          22
                        </Typography>
                      </Box>
                      <Box display="flex" marginLeft="10px">
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 0",
                          }}
                        >
                          Blood Group :
                        </Typography>
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 10px",
                          }}
                        >
                          B+
                        </Typography>
                      </Box>
                      <Box display="flex" marginLeft="10px">
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 0",
                          }}
                        >
                          profession :
                        </Typography>
                        <Typography
                          variant="h5"
                          color={colors.grey[100]}
                          sx={{
                            m: "0 0 5px 10px",
                          }}
                        >
                          Software Engineer
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  height="30vh"
                  sx={{
                    border: "1px solid #d5d5d5",
                  }}
                >
                  <Typography
                    variant="h4"
                    textAlign="center"
                    color={colors.grey[100]}
                    sx={{
                      m: "0 0 5px 0",
                      border: "1px solid #d5d5d5",
                    }}
                  >
                    Symptoms
                  </Typography>
                  <Box display="flex" justifyContent="space-evenly">
                    <Box width="8vw">
                      <img
                        height="100vh"
                        width="120vw"
                        style={{ borderRadius: "50%" }}
                        src="https://bhc-web-backend.vercel.app/symptom-image/AA01.png"
                      />
                      <Typography
                        variant="h5"
                        textAlign="center"
                        color={colors.grey[100]}
                     
                      >
                        Headache
                      </Typography>
                    </Box>

                    <Box>
                      <Box width="8vw">
                        <img
                          height="100vh"
                          width="120vw"
                          style={{ borderRadius: "50%" }}
                          src="https://bhc-web-backend.vercel.app/symptom-image/AA02.png"
                        />
                        <Typography
                          variant="h5"
                          textAlign="center"
                          color={colors.grey[100]}
                        
                        >
                         snezze
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box width="8vw">
                        <img
                          height="100vh"
                          width="120vw"
                          style={{ borderRadius: "50%" }}
                          src="https://bhc-web-backend.vercel.app/symptom-image/AA03.png"
                        />
                        <Typography
                          variant="h5"
                          textAlign="center"
                          color={colors.grey[100]}
                          
                        >
                         Cough
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box width="8vw">
                        <img
                        
                          height="100vh"
                          width="120vw"
                          style={{ borderRadius: "50%" }}
                          src="https://bhc-web-backend.vercel.app/symptom-image/AA04.png"
                        />
                        <Typography
                          variant="h5"
                          textAlign="center"
                          color={colors.grey[100]}
                       
                        >
                          Mirgrane
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                height="60vh"
                width="35vw"
                display="flex"
                sx={{
                  border: "1px solid #d5d5d5",
                }}
                flexDirection="column"
                justifyContent="space-evenly"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    border: "1px solid #d5d5d5",
                    borderRadius: "5px",
                    height: "50px",
                    p: "0 3px 0 3px",
                    cursor: "pointer",

                    "&:hover": {
                      backgroundColor: "#DADADA",
                    },
                  }}
                  onClick={() => {
                    setActive("one");
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      color={colors.grey[100]}
                      sx={{ m: "0 0 5px 0" }}
                    >
                      Debit / Credit Card
                    </Typography>
                  </Box>
                  <Box display="flex" width={250} justifyContent="flex-end">
                    <img src={master} width={60} alt={"img"} />
                    <img src={visa} width={60} alt={"img"} />
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    border: "1px solid #d5d5d5",
                    borderRadius: "5px",
                    height: "50px",
                    p: "0 3px 0 3px",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#DADADA",
                    },
                  }}
                  onClick={() => {
                    setActive("two");
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      color={colors.grey[100]}
                      sx={{ m: "0 0 5px 0" }}
                    >
                      Online Payment
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-evenly"
                    sx={{ fontSize: "2rem" }}
                    width={250}
                    alignItems="center"
                  >
                    <img src={upi} width={60} alt={"img"} />
                    <img src={PhonePay} width={30} alt={"img"} />
                    <img src={Paytm} width={30} alt={"img"} />
                    <img src={gpay} width={100} alt={"img"} />
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    border: "1px solid #d5d5d5",
                    borderRadius: "5px",
                    height: "50px",
                    p: "0 3px 0 3px",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#DADADA",
                    },
                  }}
                  onClick={() => {
                    setActive("three");
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      color={colors.grey[100]}
                      sx={{ m: "0 0 5px 0" }}
                    >
                      Cash Only
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    width={250}
                    alignItems="center"
                  >
                    <Box mr={2}>
                      <img src={money} width={50} alt={"img"} />
                    </Box>
                    <img src={ruppe} width={35} alt={"img"} />
                  </Box>
                </Box>
              </Box>

              {active === "one" && <Card />}
              {active === "two" && <Qrcode />}
              {active === "three" && <Cash />}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Payment;
