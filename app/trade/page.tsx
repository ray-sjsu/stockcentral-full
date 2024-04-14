'use client';
import Header from '@/components/header'
import ChartList from '@/components/trade/charts/ChartList';
import InfoBoxList from '@/components/trade/info/InfoBoxList';
import NewsList from '@/components/trade/news/NewsList';
import { retrieveStockInfo } from '@/lib/actions';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const TradePage = () => {
  const searchParams = useSearchParams()
  const stockQuery = searchParams.get("stock") ?? 'AMZN'
  const [stockData, setStockData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const retrieveData = async () => {
      setIsLoading(true)
      const stockDataArray = await retrieveStockInfo(stockQuery, "all")
      setStockData(stockDataArray)
      setIsLoading(false)
    }
    retrieveData()
  }, [stockQuery])

  return (
    <main className="flex flex-col items-center mt-10">
      <Header stockSymbol={stockQuery} />
      <h1 className="mt-10">trade page</h1>
      <h1>{`is loading: ${isLoading}`}</h1>
      <div className="flex flex-col w-10/12">
        {
          !isLoading ? (
            <>
              <h1>{`Current price: ${stockData[0]}`}</h1>
              <InfoBoxList otherInfo={stockData[1]} />
              <ChartList chartData={stockData[2]} />
              <NewsList newsData={stockData[3]} />
            </>
          ) : (
            <h1 className="text-2xl">is loading please wait</h1>
          )
        }
      </div>
    </main>
  )
}

export default TradePage