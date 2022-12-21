import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      Month: 4000,
      Consult: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      Month: 3000,
      Consult: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      Month: 2000,
      Consult: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      Month: 2780,
      Consult: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      Month: 1890,
      Consult: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      Month: 2390,
      Consult: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      Month: 3490,
      Consult: 4300,
      amt: 2100,
    },
    {
        name: 'Aug',
        Month: 3490,
        Consult: 4300,
        amt: 2100,
    },
    {
        name: 'Sep',
        Month: 3490,
        Consult: 4300,
        amt: 2100,
    },
    {
        name: 'Octo',
        Month: 6490,
        Consult: 5300,
        amt: 2100,
    },
    {
        name: 'Nov',
        Month: 5490,
        Consult: 4300,
        amt: 2100,
    },
    {
        name: 'Dec',
        Month: 4490,
        Consult: 3000,
        amt: 2100,
    },
  ];

const Line2 = () => {
  return (
    // <div className="bg-white w-[500px] ">
    <div className="bg-blue-200 w-100% ">
        {/* <ResponsiveContainer width="100%" height="100%"> */}
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Month" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Consult" stroke="#82ca9d" />
        </LineChart>
      {/* </ResponsiveContainer> */}
    </div>
  )
}

export default Line2