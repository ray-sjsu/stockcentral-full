'use client';
import Header from '@/components/header'
import ChartList from '@/components/trade/charts/ChartList';
import InfoBoxList from '@/components/trade/info/InfoBoxList';
import NewsList from '@/components/trade/news/NewsList';
import { retrieveStockInfo } from '@/lib/actions';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

type APIStatusType = 'idle' | 'loading' | 'success' | 'error';

const TradePageContent = () => {
  const searchParams = useSearchParams()
  const stockQuery = searchParams.get("stock") ?? 'AMZN'
  const [stockData, setStockData] = useState([])
  const [APIStatus, setAPIStatus] = useState<APIStatusType>('idle')

  useEffect(() => {
    const retrieveData = async () => {
      setAPIStatus('loading')
      const stockDataArray = await retrieveStockInfo(stockQuery, "all")
      setStockData(stockDataArray)
      if (!stockDataArray) {
        setAPIStatus('error')
      } else {
        setAPIStatus('success')
      }
    }
    retrieveData()
  }, [stockQuery])

  return (
    <main className="flex flex-col items-center mt-10">
      <Header stockSymbol={stockData[-1]} />
      <h1 className="mt-10">trade page</h1>
      <h1>{`is loading: ${APIStatus}`}</h1>
      <div className="flex flex-col w-10/12">
        {
          APIStatus === 'error' ? (
            <h1 className="text-2xl">there has been an API error</h1>
          ) : null
        }
        {
          APIStatus === 'loading' || APIStatus === 'idle' ? (
            <h1 className="text-2xl">is loading please wait</h1>
          ) : null
        }
        {
          APIStatus === 'success' ? (
            <>
              <h1>{`Current price: ${stockData[0]}`}</h1>
              <InfoBoxList otherInfo={stockData[1]} />
              <ChartList chartData={stockData[2]} />
              <NewsList newsData={stockData[3]} />
            </>
          ) : null
        }
      </div>
    </main>
  )
}

export default TradePageContent