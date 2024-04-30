import { stockAPIChartList } from '@/lib/types/types';
import React from 'react'
import BarChart from './BarChart';

type ChartListProps = {
    chartData: stockAPIChartList | null
}

const ChartList = ({chartData}: ChartListProps) => {
    let ChartArray = [];
    if (chartData) {
        if (Object.values(chartData.income).length > 1) {
            ChartArray.push({
                title: "Quarterly Income ($)",
                labels: Object.keys(chartData.income),
                data: Object.values(chartData.income)
            })
        }
        if (Object.values(chartData.revenue).length > 1) {
            ChartArray.push({
                title: "Quarterly Revenue ($)",
                labels: Object.keys(chartData.revenue),
                data: Object.values(chartData.revenue)
            })
        }
    }

    return (
        <div className="flex flex-col gap-2">
            {
                Array.isArray(ChartArray) && ChartArray.length > 0 ?
                    ChartArray.map((entry, index) => (
                        <div key={index}>
                            <BarChart title={entry.title} labels={entry.labels} data={entry.data} />                     
                        </div>
                    ))
                : (<h1>News Data not available</h1>)
            }
        </div>
    )
}

export default ChartList