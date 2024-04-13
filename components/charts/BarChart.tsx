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

type BarChartProps = {
    title: string,
    labels: string[],
    data: number[],
    borderColor?: string[],
    borderWidth?: number,
    backgroundColor?: string[] 
}

const BarChart = ({
        title="Chart Title",
        labels,
        data,
        borderColor=["rgba(75, 192, 192)"],
        borderWidth=1,
        backgroundColor=["rgba(255, 255, 255, 0.2)"]
    } : BarChartProps) => {

    const options = {}
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
    }

  return (
    <Bar options={options} data={chartData} />
  )
}

export default BarChart