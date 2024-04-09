'use client';

import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend 
} from 'chart.js'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const barChartData = {
    labels: [
        "2019 Q1",
        "2019 Q2",
        "2019 Q3"
    ],
    datasets: [
        {
            label: "Revenue ($)",
            data: [29084000000, 32471000000, 30571000000],
            borderColor: ["rgba(75, 192, 192)"],
            borderWidth: 1,
            backgroundColor: ["rgba(255, 255, 255, 0.2)"],
        },
    ],
}

const BarChart = () => {
    const options = {}
    const data = barChartData;

  return (
    <Bar options={options} data={data} />
  )
}

export default BarChart