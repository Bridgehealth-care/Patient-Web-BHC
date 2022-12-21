import React, { useState } from "react";
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


const Profile = () => {
  const [active, setActive] = useState("");
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

  return (
    <div>
    <div className="ml-[180px] mt-[50px] w-[1050px] h-auto flex flex-col pl-3 pt-2 font-open_sans">
      <div className="bg-blue-800 shadow-2xl rounded-2xl w-[99%] h-[99%]  pt-9  p-10 flex flex-col">
        {/* <div className="text-4xl text-center text-red-500">
          Operator Profile
        </div> */}
        <div className="flex h-32 items-center space-x-8">
          <img
            src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZ2lybHN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            // className="rounded-lg object-cover h-16 w-16"
            className="rounded-full object-cover h-[110px] w-[110px]"
          />
          <div className="flex flex-col space-y-3">
            <span className="font-bold text-2xl  text-white">
              Divyanshi Mehra
            </span>
            {/* <span className="text-green-500 bg-blue-800 rounded-xl w-24 text-md flex items-center justify-center space-x-3"> */}
            <span className="text-green-500 bg-blue-800 rounded-xl w-24 text-md flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-green-500 block rounded-2xl animate-pulse"></span>
              <span className="font-bold">Active</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-lg p-4 bg-blue-300 rounded-2xl w-4/5 shadow-[0px_0px_12px_-2px_rgba(0,0,0,0.3)] shadow-baby_blue_links pl-9">
          {user_data.map((ele) => (
            <div className="flex  items-center space-x-9" key={ele.x}>
              <span className="w-1/3 flex items-center space-x-2 text-gray-600 text-sm">
                <span>{ele.z}</span>
                <span>{ele.x}</span>
              </span>
              <span className="w-1/3 text-gray-900 tracking-wide font-medium">
                {ele.y}
              </span>
            </div>
          ))}
        </div>
        <div className="bg-blue-800 px-4 py-3 mt-3 text-right sm:px-6">
          <button
            type="submit"
            onClick={() => setActive("one")}
            // className="inline-flex justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-blue-200 shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            className="inline-flex justify-center rounded-md border border-transparent bg-green-400 hover:bg-green-800 py-2 px-4 font-medium text-white text-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Add Insurence
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      {/* <div>{active === "one" && <Update2 />}</div> */}
    </div>
    </div>
  );
};

export default Profile;
