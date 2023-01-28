import React, { useState } from "react";
import Header from "../../components/Header";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataMedicalRecords } from "../../data/mockData";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import PrintIcon from "@mui/icons-material/Print";
import LineChart from "../../components/LineChart";
import Linetempchart from "../../components/LineChartTemp";
import PieChart from "../../components/PieChart";
import Insurence from "../insurence/Insurence";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
// import WomanOutlinedIcon from '@mui/icons-material/WomanOutlined';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import ElderlyWomanOutlinedIcon from "@mui/icons-material/ElderlyWomanOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
// import Update2 from "./Update2";
import { AiOutlinePlus } from 'react-icons/ai';

const PatientHistory = () => {
  const [active, setActive] = useState("one");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const user_data = [
    {
      x: "Phone Number",
      y: "96253368070",
      z: <LocalPhoneOutlinedIcon fontSize="small" />,
    },
    {
      x: "Email",
      y: "divyanshi@gmail.com",
      z: <EmailOutlinedIcon fontSize="small" />,
    },
    {
      x: "Registered Date",
      y: "21 / 01 / 22",
      z: <EventOutlinedIcon fontSize="small" />,
    },
    {
      x: "ZIP Code",
      y: "121002",
      z: <NearMeOutlinedIcon fontSize="small" />,
    },
    {
      x: "Age",
      y: "86",
      z: <Person2OutlinedIcon fontSize="small" />,
    },
    {
      x: "Gender",
      y: "Female",
      z: <ElderlyWomanOutlinedIcon fontSize="small" />,
    },
    {
      x: "State",
      y: "Uttarakhand",
      z: <LocationOnOutlinedIcon fontSize="small" />,
    },
    {
      x: "Address",
      y: "R-39 / Yuho street",
      z: <HomeOutlinedIcon fontSize="small" />,
    },
  ];
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Doctor Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "presciptionname",
      headerName: "Presciption Name",
      flex: 1.1,
    },
    {
      field: "medicalreport",
      headerName: "Medical Report",
      flex: 1.2,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="80%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            backgroundColor={
              status === "view"
                ? colors.greenAccent[600]
                : status === "notAttended"
                ? colors.redAccent[700]
                : colors.yellowAccent[700]
            }
          >
            {status === "view" && <PrintIcon />}
            {status === "notAttended" && <DoNotDisturbAltIcon />}
            {status === "Pending" && <PendingActionsIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div className="flex flex-wrap">
      {/* <div className="w-2/3">
        <Insurence />
      </div> */}
      {/* Profile Section */}


      <div className=" mt-[50px] w-full h-auto flex flex-col pl-3 pt-2 font-open_sans">
      <div className="bg-white shadow-2xl rounded-2xl w-[99%] h-[99%]  pt-9  p-10 flex flex-col">
        {/* <div className="text-4xl text-center text-red-500">
          Operator Profile
        </div> */}
        <div className="flex h-32 items-center space-x-8">
          <img
            src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZ2lybHN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            // className="rounded-lg object-cover h-16 w-16"
            className="rounded-full object-cover h-[120px] w-[120px]"
          />
          <div className="flex flex-col space-y-3">
            <span className="font-bold text-2xl  text-black">
              Divyanshi Mehra
            </span>
            {/* <span className="text-green-500 bg-blue-800 rounded-xl w-24 text-md flex items-center justify-center space-x-3"> */}
            <span className="text-green-500 rounded-xl w-24 text-md flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-green-500 block rounded-2xl animate-pulse"></span>
              <span className="font-bold text-lg">Active</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-lg p-4 bg-[#3767B1] rounded-2xl w-4/5 shadow-[0px_0px_12px_-2px_rgba(0,0,0,0.3)] shadow-baby_blue_links pl-9">
          {user_data.map((ele) => (
            <div className="flex  items-center space-x-9" key={ele.x}>
              <span className="w-1/3 flex items-center space-x-2 tracking-wide text-white ">
                <span>{ele.z}</span>
                <span>{ele.x}</span>
              </span>
              <span className="w-1/3 text-white tracking-wide font-medium">
                {ele.y}
              </span>
            </div>
          ))}
        </div>
        <Box m="18px">
        {/* <Header title="PATIENT HISTORY" subtitle="Find all your History..." /> */}
        <Box marginLeft="-300px" m="10px" height="200px" display="flex">
          <Box
            className="buttons space-y-3"
            display="flex"
            flexDirection="column"
            // justifyContent="space-evenly"
          >
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                setActive("one");
              }}
            >
              ECG
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                setActive("two");
              }}
            >
              Temperature
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                setActive("three");
              }}
            >
              Spo2
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                setActive("four");
              }}
            >
              Blood Pressure
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                setActive("five");
              }}
            >
              Health Rate
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                setActive("six");
              }}
            >
              Sugar level
            </Button>
          </Box>
          <Box className="linechart" height="50vh" width="160vh">
            {active === "one" && <LineChart />}
            {active === "two" && <Linetempchart />}
            {active === "three" && <LineChart />}
            {active === "four" && <LineChart />}
            {active === "five" && <LineChart />}
            {active === "six" && <PieChart />}
          </Box>
        </Box>
        <Box m="20px">
          <Box
            m="20px 0 0 0"
            height="30vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
            }}
          >
            {/* <DataGrid
              checkboxSelection
              rows={mockDataMedicalRecords}
              columns={columns}
            /> */}
          </Box>
        </Box>
      </Box>
      </div>
      {/* <div>{active === "one" && <Update2 />}</div> */}
    </div>

      {/* Map section */}
     
    </div>
  );
};

export default PatientHistory;
