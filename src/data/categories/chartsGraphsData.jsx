export const chartsAndGraphsData = [
  // ... previous charts ...
  {
    id: "pie-chart",
    title: "Interactive Pie Chart",
    description: "Pie chart with interactive slice highlighting",
    preview: `
<div class="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
  <div class="flex justify-center items-center">
    <div class="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
  </div>
</div>`,
    code: `import React, { useState } from 'react';
import { 
  PieChart, 
  Pie, 
  Sector, 
  Cell, 
  Tooltip,
  ResponsiveContainer 
} from 'recharts';

const InteractivePieChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie 
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell 
                key={\`cell-\${index}\`} 
                fill={COLORS[index % COLORS.length]} 
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InteractivePieChart;`,
    category: "charts-and-graphs",
  },
];
