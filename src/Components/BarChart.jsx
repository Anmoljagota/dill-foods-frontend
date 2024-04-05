import React, { useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const BarGraph = ( {visitors} ) => {
  const extractedData = visitors.reduce((acc, item) => {
    const { year, month, total_visitors } = item;
    acc.push({ year, month, total_visitors });
    return acc;
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={600}
        height={400}
        data={extractedData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" strokeWidth={1}/>
        <XAxis dataKey="month" tick={{ fontSize: "10px", fontWeight: "600" }} />
        <YAxis tick={{ fontSize: "14px", fontWeight: "600" }} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="total_visitors"
          fill="#8884d8"
          fontSize={"5px"}
          barSize={30}
          radius={[5, 5, 5, 5]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
