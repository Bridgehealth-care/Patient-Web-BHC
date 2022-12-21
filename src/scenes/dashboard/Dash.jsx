import { Badge, Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockRAppointments } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AccessibleIcon from "@mui/icons-material/Accessible";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EventIcon from "@mui/icons-material/Event";
import HouseIcon from "@mui/icons-material/House";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Pie2 from "../charts/Pie2";
import Line2 from "../charts/Line2";
import Pie3 from "../charts/Pie3";
// import FaAccessibleIcon from 'react-icons/fa'
// import FontAwesomeIcon from 'react-fontawesome'
import { AiFillAlert, AiFillStar, AiOutlineClockCircle } from "react-icons/ai";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { MdOutlineRateReview } from "react-icons/md";
import Clinic from "../LiveClinic/Clinic";
import Table from "./Table";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaidIcon from "@mui/icons-material/Paid";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

          <Box>
            {/* <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <DownloadOutlinedIcon sx={{ mr: "10px" }} />
              Download Reports
            </Button> */}
          </Box>
        </Box>

        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 3"
            // backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="rounded-2xl bg-blue-800 hover:bg-blue-900"
          >
            <StatBox
              title="12,361"
              subtitle="Doctor Appointment"
              progress="0.25"
              increase="+3"
              icon={
                <AccessibleIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            // backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="rounded-2xl bg-blue-800 hover:bg-blue-900"
          >
            <StatBox
              title="25"
              subtitle="Medical records"
              progress="0.50"
              increase="+21%"
              icon={
                <EventIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            // backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="rounded-2xl bg-blue-800 hover:bg-blue-900"
          >
            <StatBox
              title="7.00 hours"
              subtitle="TDM Time"
              progress="0.50"
              increase="+21%"
              icon={
                <AccessTimeIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            // backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="rounded-2xl bg-blue-800 hover:bg-blue-900"
          >

            <StatBox
              title="5,134"
              subtitle="INR Money"
              progress="0.18"
              increase="+33%"
              icon={
                <PaidIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
            <Badge className="mt-[120px] font-semibold mr-2 absolute bottom-0 right-0" color="secondary" variant="dot">
              Active
            </Badge>
          </Box>

          {/* ROW 2 */}
          {/* <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Appointment Frequncy
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                593
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box> */}
          <Box
            gridColumn="span 9"
            gridRow="span 2"
            // backgroundColor={colors.primary[400]}
            overflow="auto"
            className="w-auto rounded-2xl h-[400px] bg-blue-800 hover:bg-blue-900"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Recent Appointments
              </Typography>
            </Box>
            {/* {mockRAppointments.map((appointment, i) => (
              <Box
                key={`${appointment.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {appointment.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {appointment.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{appointment.date}</Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  {appointment.cost}
                </Box>
              </Box>
            ))} */}
            <Table />
          </Box>

          {/* ROW 3 */}
          {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Patients Completed
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              4,352
            </Typography>
            <Typography>Total Overview</Typography>
          </Box>
        </Box> */}
          {/* <div>
        </div> */}
          {/* <div className="ml-[30px] mt-4 w-100% bg-blue-800 rounded-xl items-center h-auto">
            <div className=" p-4 flex flex-row space-x-[150px]">
              <p className="text-blue-500 text-2xl">Total Consulted</p>
              <p className="text-2xl text-blue-500">2123</p>
            </div>
            <div>
              <Pie2 />
            </div>
            <div className="mt-[-100px]">
              <span className="text-2xl text-blue-500">Total Consulted by</span>
              <div className="space-x-[200px]">
                <span className="text-xl text-red-400 flex flex-col items-left">
                  <AiFillAlert />
                  Urgent 399
                </span>
                <span className="text-xl text-green-400 flex flex-col items-right mt-[-49px]">
                  <BsFillCalendarCheckFill /> Regular 400
                </span>
              </div>
            </div>
          </div> */}
          <Box className="ml-10 w-8 ">
            <Clinic />
          </Box>
        </Box>
      </Box>

      <div className="ml-4 flex flex-row mt-[120px] space-x-[138px]">
        <div className="flex flex-col p-3 bg-blue-800 items-center rounded-xl w-[600px] h-auto">
          <span className="text-xl text-white">Total Reputiaon and Reivew</span>
          <Pie3 />
          <div className="flex flex-row mt-[-50px] space-x-[150px]">
            <span className="text-xl text-white">
              Reputiaons
              <br />
              <div className="flex flex-row">
                <AiFillStar />
                <span className="text-xl text-white">2321</span>
              </div>
            </span>
            <span className="text-xl text-white">
              Review
              <br />
              <div className="flex flex-row">
                <MdOutlineRateReview />
                <span className="text-xl text-white">4.8</span>
              </div>
            </span>
          </div>
        </div>
        <div className="flex flex-col p-3 items-center bg-blue-800 rounded-xl w-[600px] h-auto">
          <span className="text-xl text-center text-white">Reports</span>
          <br />
          <Line2 />
        </div>
      </div>
      {/* <div className="ml-10 p-4 mt-[100px] bg-white w-[550px]">
        <p className="text-2xl ml-[230px] text-blue-500">Reports</p>
         <Pie3 /> 
      </div> */}
    </>
  );
};

export default Dashboard;
