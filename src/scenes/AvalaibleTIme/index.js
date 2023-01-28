import { Box } from "@mui/system";
import { button, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import AddLocationTwoToneIcon from "@mui/icons-material/AddLocationTwoTone";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import VerifiedTwoToneIcon from "@mui/icons-material/VerifiedTwoTone";
import VerifiedIcon from "@mui/icons-material/Verified";
     import { useNavigate } from "react-router-dom";
const AvalaibleTime = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
        const navigate = useNavigate();
  return (
    <>
      <Box m="18px">
        {/* <Header
          title="Avalaible Time"
          subtitle="Find your suitable TimeSlots  ..."
        /> */}
        <Box mt="60px" mb="34px">
          <Typography
            variant="h4"
            color="black"
            fontWeight="bold"
            sx={{ m: "0 0 5px 0" }}
            textAlign="center"
          >
            Appoinment Details
          </Typography>
        </Box>

        <Box m="20px" display="flex" justifyContent="space-around">
          <Box
            display="flex"
            justifyContent="space-around"
            sx={{ border: 1, width: "85%", borderRadius: "10px" }}
          >
            <Box
              sx={{ width: "70%", height: 75 }}
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              borderRadius="4"
            >
              <Box display="flex" justifyContent="space-around">
                <Box>
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    textAlign="center"
                    sx={{ m: "0 0 5px 0" }}
                  >
                    TDM ID : TDMId01
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    textAlign="center"
                    sx={{ m: "0 0 5px 0" }}
                  >
                    Date : 12.03.12
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-around">
                <Box>
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    textAlign="center"
                    sx={{ m: "0 0 5px 0" }}
                  >
                    Doctor Name : Alex Rayan
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    textAlign="center"
                    sx={{ m: "0 0 5px 0" }}
                  >
                    Doctor ID : DocId01
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <AddLocationTwoToneIcon
                className="text-green-500"
                size="large"
                sx={{ width: 70, height: 67 }}
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            {/* <button
              color="primary"
              variant="contained"
              sx={{ width: "5rem", height: "3rem" }}
              startIcon={<VerifiedIcon color={colors.grey[100]} />}
            >
              Verify
            </button> */}
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Verify
              <VerifiedIcon color={colors.grey[100]} />
            </button>
          </Box>
        </Box>
        <Box m="30px 0 0 0" height="60vh">
          <Box mb="34px">
            <Typography
              variant="h4"
              color="black"
              fontWeight="bold"
              sx={{ m: "0 0 5px 0" }}
              textAlign="center"
            >
              Book your Time slot
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" m="45px">
            <Box
              sx={{
                height: "55vh",
                minWidth: "35vw",
                border: 1,
                borderRadius: "10px",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ m: "0 0 5px 0" }}
                  textAlign="center"
                >
                  Morning-AM
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  rowGap: 2,
                  columnGap: 3,
                  width: "100%",
                  height: "75%",
                  marginTop: 4,
                }}
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"

                    // disabled
                  >
                    6.15
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    7.15
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    8.00
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    6.30
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    // disabled
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    7.30
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    8.15
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    6.45
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    7.45
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    8.30
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    8.45
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    9.00
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    9.30
                  </button>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                height: "55vh",
                minWidth: "35vw",
                border: 1,
                borderRadius: "7px",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ m: "0 0 5px 0" }}
                  textAlign="center"
                >
                  Evening-PM
                </Typography>
              </Box>
              <Grid
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  rowGap: 2,
                  columnGap: 3,
                  width: "100%",
                  height: "75%",
                  marginTop: 4,
                }}
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    6.15
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    7.15
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    // disabled
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    8.00
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    6.30
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    // disabled
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    7.30
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    8.15
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    6.45
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    7.45
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    8.30
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    8.45
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    9.00
                  </button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <button
                    // color="success"
                    // variant="contained"
                    // sx={{ fontSize: "1rem", color: "white" }}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    9.15{" "}
                  </button>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <div m="30px 0 0 0" display="flex" justifyContent="space-evenly" className=''> */}
      {/* <Box display="flex" alignItems="center"> */}
      {/* <button
            // color="secondary"
            // variant="contained"
            // sx={{ width: 50, height: 30 }}
            className="inline-flex justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"

          >
            Back
          </button> */}
      {/* </Box> */}
      <div
        // display="flex"
        // sx={{ width: "15%" }}
        // margin="18px"
        // justifyContent="space-between"
        className="flex flex-row mt-[50px] space-x-10 ml-10 "
      >
        <button
          // color="secondary"
          // variant="contained"
          // sx={{ width: 50, height: 30 }}
          className="inline-flex absolute left-[150px] justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Refresh
        </button>
        <button
          // color="secondary"
          // variant="contained"
          // sx={{ width: 50, height: 30 }}
          className="inline-flex absolute right-[60px] justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          onClick={() => navigate("/payment")}
        >
          Submit
        </button>
      </div>
      {/* </div> */}
    </>
  );
};

export default AvalaibleTime;
