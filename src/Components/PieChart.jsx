import {
    PieChart,
    Pie,
    Tooltip,
    Legend,
    Cell,
    ResponsiveContainer,
  } from "recharts";
  const PieGraph = ({ sales }) => {
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
    }) => {
      const RADIAN = Math.PI / 180;
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
      // Determine the horizontal alignment based on the position of the label
      let alignment = "middle";
      if (x > cx) {
        alignment = "start";
      } else {
        alignment = "end";
      }
  
      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={alignment}
          dominantBaseline="central"
          // fontSize={24}
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
    const calculatedPercentage = sales.map((item) => {
      const sale = parseFloat(item.sale);
      const expected = parseFloat(item.expected);
      const percentage = ((sale / expected) * 100).toFixed(2);
      return { name: item.month, value: parseFloat(percentage) };
    });
  
    return (
      <ResponsiveContainer width={"100%"} height={400}>
        <PieChart  height={600}>
          <Pie
            data={calculatedPercentage}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            labelLine={false}
            label={renderCustomizedLabel}
            //   fontSize={400}
            //   fontSize={"50px"}
          >
            {calculatedPercentage.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  };
  
  export default PieGraph;
  