import React, { useState } from "react";
import { TextField } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
// import WomanOutlinedIcon from '@mui/icons-material/WomanOutlined';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import ElderlyWomanOutlinedIcon from "@mui/icons-material/ElderlyWomanOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom"

const Update = () => {
  const user_data = [
    {
      x: "Phone Number",
      y: "96253368070",
      z: <LocalPhoneOutlinedIcon fontSize="small" />,
      type: "tel"
    },
    {
      x: "Email",
      y: "divyanshi@gmail.com",
      z: <EmailOutlinedIcon fontSize="small" />,
      type: "email",
    },
    {
      x: "Registered Date",
      y: "21 / 01 / 22",
      z: <EventOutlinedIcon fontSize="small" />,
      type: "date",
    },
    {
      x: "ZIP Code",
      y: "121002",
      z: <NearMeOutlinedIcon fontSize="small" />,
      type: "number",
    },
    {
      x: "Age",
      y: "86",
      z: <Person2OutlinedIcon fontSize="small" />,
      type: "number",
    },
    {
      x: "Gender",
      y: "Female",
      z: <ElderlyWomanOutlinedIcon fontSize="small" />,
      type: "text"
    },
    {
      x: "State",
      y: "Uttarakhand",
      z: <LocationOnOutlinedIcon fontSize="small" />,
      type: "text",
    },
    {
      x: "Address",
      y: "R-39 / Yuho street",
      z: <HomeOutlinedIcon fontSize="small" />,
      type: "text"
    },
  ];

  return (
    <div className="mt-[50px] h-auto flex flex-col pl-3 items-center pt-2 font-open_sans">
      <div className="shadow-2xl rounded-2xl w-[90%]   pt-9  p-10 flex flex-col">
        <div className="flex h-32 items-center space-x-8 mb-5">
          {/* <img
            src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZ2lybHN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="rounded-full object-cover h-[120px] w-[120px]"
          /> */}

          <div>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-24 w-24 overflow-hidden rounded-full bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <button
                type="button"
                color="secondary"
                className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Change
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <span className="font-bold text-2xl  ">
              <TextField
                type="text"
                placeholder="Divyanshi Mehra"
                color="secondary"
                focused
                label="Name"
                variant="outlined"
                fullWidth
              />
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-lg p-4 bg-[#3767B1] rounded-2xl w-4/5 shadow-[0px_0px_12px_-2px_rgba(0,0,0,0.3)] shadow-baby_blue_links pl-9">
          {user_data.map((ele) => (
            <div className="flex  items-center space-x-9" key={ele.x}>
              <span className="w-1/3 flex items-center space-x-2 text-white tracking-wide">
                <span>{ele.z}</span>
                <span>{ele.x}</span>
              </span>
              <span className="w-1/3 text-white tracking-wide font-medium">
                <TextField
                  type={ele.type}
                  placeholder={ele.y}
                  color="secondary"
                  focused
                  variant="standard"
                  fullWidth
                />
              </span>
            </div>
          ))}
        </div>
        <div
          style={{
            float: "right",
            display: "inline",
            boxSizing: "content-box",
            padding: 0,
          }}
          className="px-4 py-3 mt-3 sm:px-6 transform -translate-y-2 rounded-md"
        >
          <button
            style={{ transform: "translateX(52pc) translateY(-3pc)" }}
            type="submit"
            className="inline-flex justify-center m-0 rounded-md border border-transparent bg-green-400 py-2 px-4 text-lg font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <Link to="/profile">Save</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
