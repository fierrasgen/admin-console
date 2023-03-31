import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const LineChart = ({ chartData }) =>
  <Line data={chartData} options={
    {responsive: true,
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
      },
      layout: {
        padding: {
          top: 20,
          bottom: 20,
          right: 20,
          left: 20,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      maintainAspectRatio: false
    }}
  />;

export default LineChart;
