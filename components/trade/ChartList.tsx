import { retrieveStockInfo } from '@/lib/actions';
import { stockAPIChartList, stockAPINewsArray, stockChartInfo, stockChartInfoArray } from '@/lib/types';
import React from 'react'
import NewsComponent from '../NewsComponent';
import BarChart from '../charts/BarChart';

const ChartList = async (stock : string) => {
    let APIData: stockAPIChartList = await retrieveStockInfo(stock, "charts")
    return (
        <section className="flex flex-col gap-2">
            {

            }
        </section>
    )
}

export default ChartList