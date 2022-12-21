import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Clinic = () => {
  const [specialization, setSpecialization] = React.useState("");
  const handleChangespecialization = (event) => {
    setSpecialization(event.target.value);
  };
  return (
    <div className="ml-10 bg-blue-800 rounded-2xl w-[200px] h-[400px]">
      <div className="items-center flex flex-col mt-2 p-4">
        <span className="text-2xl font-semibold text-white mb-2">Live Clinic</span>
        {/* <span>1</span>
        <span>2</span> */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" className="text-lg">
            TDM Name
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={specialization}
            label="Specialization"
            className="text-lg"
            onChange={handleChangespecialization}
          >
            <MenuItem value={10}>TDM 1</MenuItem>
            <MenuItem value={20}>TDM 2</MenuItem>
            <MenuItem value={30}>TDM 3</MenuItem>
          </Select>
        </FormControl>
        <div className="mt-4 space-y-3 p-2 flex flex-col items-center">
          <span className="bg-blue-500 animate-ping decoration-red-500 hover:bg-red-500 rounded-xl text-center w-[100px] h-auto">1</span>
          <span className="bg-blue-500 hover:bg-blue-900 rounded-xl text-center w-[100px] h-auto">2</span>
          <span className="bg-blue-500 hover:bg-blue-900 rounded-xl text-center w-[100px] h-auto">3</span>
          <span className="bg-blue-500 hover:bg-blue-900 rounded-xl text-center w-[100px] h-auto">4</span>
          <span className="bg-blue-500 hover:bg-blue-900 rounded-xl text-center w-[100px] h-auto">5</span>
          <span className="bg-blue-500 hover:bg-blue-900 rounded-xl text-center w-[100px] h-auto">6</span>
          <span className="bg-blue-500 hover:bg-blue-900 rounded-xl text-center w-[100px] h-auto">7</span>
          <span className="bg-blue-500 hover:bg-blue-900 rounded-xl text-center w-[100px] h-auto">8</span>
        </div>
      </div>
    </div>
  );
};

export default Clinic;