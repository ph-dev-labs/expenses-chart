"use client";
import React, { useState } from "react";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./Holder.style.css";
import { Data } from "@/app/utilis/data";
import total from "@/app/utilis/data";

Chart.register(CategoryScale)
const Holder = () => {
  const [chart, setChart] = useState({
    labels: Data.map((data) => data.day),
    datasets: [
      {
        label: "My Spendings in the Last 7 days",
        data: Data.map((data) => data.amount),
        backgroundColor: [
          "hsl(10, 79%, 65%)",
          "hsl(186, 34%, 60%)"
        ],
        borderRadius: 3,
      },
    ],
  });

  return (
    <div className="holder">
      <h1 className="spending-title">spending - Last 7 days</h1>
      <div className="chart">
        <Bar
          data={chart}
          options={{
            plugins: {
              title: {
                display: true,
                text: "My spendings in the last 7 days",
              },
              legend: {
                display: false,
              },
            },
          }}
        /> 
        <div className="thin-line"></div>
      </div>
     
    </div>
  );
};

export default Holder;
