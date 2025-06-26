"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Income", value: 40 },
  { name: "Outcome", value: 35 },
  { name: "Profit", value: 25 },
];

const COLORS = ["#004d00", "#f97316", "#2e7d32"]; // dark green, orange, green

const Chart2 = () => {
  return (
    <div className="p-6 rounded-2xl shadow-[2px_4px_21px_0px_rgba(0,0,0,0.25)] bg-white w-full h-[350px] max-w-md mt-10">
      <h2 className="text-2xl font-semibold mb-4">Company Statistics</h2>

      <ResponsiveContainer width={400} height={300}>
        <PieChart>
          <Pie
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={70}
            outerRadius={140}
            dataKey="value"
            stroke="none"
            paddingAngle={10}
            label={({ cx, cy }) => (
              <>
                <text
                  x={cx}
                  y={cy - 10}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-[24px] font-bold fill-black"
                >
                  1230
                </text>
                <text
                  x={cx}
                  y={cy + 15}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-sm fill-gray-500"
                >
                  Overall Score
                </text>
              </>
            )}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>    
        </PieChart>
      </ResponsiveContainer>

      {/* Center value and label */}

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-[-75px] text-xl">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-[#0D4715] rounded-full" />
          Income
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-[#36454F] rounded-full" />
          Outcome
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-[#36454F] rounded-full" />
          Profit
        </div>
      </div>
    </div>
  );
};

export default Chart2;
