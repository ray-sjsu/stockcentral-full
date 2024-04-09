'use client';

import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend 
} from 'chart.js'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const lineChartData = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday"
    ],
    datasets: [
        {
            label: "Steps",
            data: [300, 5000, 4500],
            borderColor: "rgb(75, 192, 192)",
        },
    ],
}

const LineChart = () => {
    const options = {}
    const data = lineChartData;

  return (
    <Line options={options} data={data} />
  )
}

export default LineChart