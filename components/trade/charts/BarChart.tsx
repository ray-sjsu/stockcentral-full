"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type BarChartProps = {
  title: string;
  labels: string[];
  data: number[];
  borderColor?: string[];
  borderWidth?: number;
  backgroundColor?: string[];
  color?: string;
  fontFamily?: string;
};

const BarChart = ({
  title = "Chart Title",
  labels,
  data,
  borderColor = ["#f59e0b"],
  borderWidth = 1,
  backgroundColor = ["#f59e0b95"],
  color = "#020617",
  fontFamily = "Inter",
}: BarChartProps) => {
    const options = {
        plugins: {
          legend: {
            labels: {
              color,
              font: {
                size: 16,
                family: fontFamily
              }
            },
          }
        },
        scales: {
          x: {
            ticks: {
              color,
              font: {
                size: 14,
                family: fontFamily
              }
            }
          },
          y: {
            ticks: {
              color,
              font: {
                size: 14,
                family: fontFamily
              }
            }
          }
        },
      };
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        borderColor: borderColor,
        borderWidth: borderWidth,
        backgroundColor: backgroundColor,
      },
    ],
  };

  return <Bar options={options} data={chartData} />;
};

export default BarChart;
