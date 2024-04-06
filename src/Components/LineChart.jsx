import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  const LineGraph = ({ revenue }) => {
    const months = Object.keys(revenue).filter((key) => key !== "year");
  
    // Creating an array of objects where each object represents a data point
    const data = months.map((month) => ({
      name: month,
      revenue: parseFloat(revenue[month]), // Converting revenue to a number
    }));
  
    //   console.log(data,"d");
  
    return (
      <ResponsiveContainer width={"100%"} height={400} >
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  
  export default LineGraph;
  