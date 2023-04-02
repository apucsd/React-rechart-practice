import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const AssignmentBar = () => {
  let assignments = [
    { id: 1, assignmentNumber: "A1", mark: 60 },
    { id: 2, assignmentNumber: "A2", mark: 60 },
    { id: 3, assignmentNumber: "A3", mark: 60 },
    { id: 4, assignmentNumber: "A4", mark: 60 },
    { id: 5, assignmentNumber: "A5", mark: 60 },
    { id: 6, assignmentNumber: "A6", mark: 60 },
    { id: 7, assignmentNumber: "A7", mark: 60 },
    { id: 8, assignmentNumber: "A8", mark: 60 },
  ];

  return (
    <div className="my-16 border bg-slate-50 w-[80%] mx-auto">
      <LineChart width={600} height={200} data={assignments}>
        <Line type="monotone" dataKey="mark" stroke="#8884d8" />
        <XAxis dataKey="assignmentNumber" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default AssignmentBar;
