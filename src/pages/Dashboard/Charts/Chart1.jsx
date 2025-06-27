"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Button, Dropdown, message, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

// Datasets
const yearData = [
  { name: "Jan", study: 30, project: 5 },
  { name: "Feb", study: 35, project: 15 },
  { name: "Mar", study: 28, project: 20 },
  { name: "Apr", study: 40, project: 30 },
  { name: "May", study: 50, project: 45 },
  { name: "Jun", study: 60, project: 55 },
  { name: "Jul", study: 45, project: 35 },
  { name: "Aug", study: 30, project: 25 },
  { name: "Sep", study: 45, project: 35 },
  { name: "Oct", study: 40, project: 30 },
  { name: "Nov", study: 35, project: 40 },
  { name: "Dec", study: 50, project: 20 },
];

const monthData = [
  { name: "Week 1", study: 10, project: 5 },
  { name: "Week 2", study: 20, project: 10 },
  { name: "Week 3", study: 15, project: 20 },
  { name: "Week 4", study: 25, project: 15 },
];

const weekData = [
  { name: "Mon", study: 5, project: 2 },
  { name: "Tue", study: 6, project: 4 },
  { name: "Wed", study: 4, project: 5 },
  { name: "Thu", study: 7, project: 3 },
  { name: "Fri", study: 6, project: 4 },
  { name: "Sat", study: 5, project: 1 },
  { name: "Sun", study: 3, project: 2 },
];

const todayData = [
  { name: "8AM", study: 1, project: 0 },
  { name: "10AM", study: 2, project: 1 },
  { name: "12PM", study: 2, project: 2 },
  { name: "2PM", study: 1, project: 1 },
  { name: "4PM", study: 3, project: 1 },
  { name: "6PM", study: 2, project: 0 },
];

// Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-md shadow text-sm border border-gray-200">
        <p className="font-semibold">{label}</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-800" />
          Study: {payload[0].value}hrs
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          Project: {payload[1].value}hrs
        </div>
      </div>
    );
  }

  return null;
};

// Main Chart Component
const Chart1 = () => {
  const [timeframe, setTimeframe] = useState("year");

  const getChartData = () => {
    switch (timeframe) {
      case "month":
        return monthData;
      case "week":
        return weekData;
      case "today":
        return todayData;
      default:
        return yearData;
    }
  };

  const items = [
    { label: "This Year", key: "year" },
    { label: "This Month", key: "month" },
    { label: "This Week", key: "week" },
    { label: "Today", key: "today" },
  ];

  const handleMenuClick = (e) => {
    setTimeframe(e.key);
    message.success(`Changed to "${e.key}" view`);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="p-4 rounded-2xl shadow-[2px_4px_21px_0px_rgba(0,0,0,0.25)] w-[600px] h-[360px] mt-[40px] ml-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Students Statistics</h2>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              {items.find((i) => i.key === timeframe)?.label}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={getChartData()} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            domain={[0, 60]}
            tickFormatter={(v) => `${v} hrs`}
            ticks={[0, 20, 40, 60]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="study"
            stroke="#006400"
            strokeWidth={3}
            dot={{ r: 5, fill: "#006400" }}
          />
          <Line
            type="monotone"
            dataKey="project"
            stroke="#f97316"
            strokeWidth={3}
            dot={{ r: 5, fill: "#f97316" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart1;
