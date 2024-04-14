import { retrieveStockInfo } from '@/lib/actions';
import { stockAPIChartList } from '@/lib/types';
import React from 'react'
import BarChart from './BarChart';

type ChartListProps = {
    stock: string
}

const ChartList = async ({stock}: ChartListProps) => {
    let APIData: stockAPIChartList = await retrieveStockInfo(stock, "charts")
    let ChartArray = [];

    if (Object.values(APIData.income).length > 1) {
        ChartArray.push({
            title: "Quarterly Income ($)",
            labels: Object.keys(APIData.income),
            data: Object.values(APIData.income)
        })
    }
    if (Object.values(APIData.revenue).length > 1) {
        ChartArray.push({
            title: "Quarterly Revenue ($)",
            labels: Object.keys(APIData.revenue),
            data: Object.values(APIData.revenue)
        })
    }
    
    return (
        <section className="flex flex-col gap-2">
            {
                Array.isArray(ChartArray) && ChartArray.length > 0 ?
                    ChartArray.map((entry, index) => (
                        <div key={index}>
                            <BarChart title={entry.title} labels={entry.labels} data={entry.data} />                     
                        </div>
                    ))
                : (<h1>News Data not available</h1>)
            }
        </section>
    )
}

export default ChartList