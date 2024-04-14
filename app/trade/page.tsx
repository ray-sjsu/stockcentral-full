import Header from '@/components/header'
import ChartList from '@/components/trade/charts/ChartList';
import NewsList from '@/components/trade/news/NewsList';
import React, { useState } from 'react'


const TradePage = () => {

  return (
    <main className="flex flex-col items-center mt-10">
      <Header />
      <h1 className="mt-10">trade page</h1>
      <div className="flex flex-col w-10/12">
        <ChartList stock={"AMZN"} />
        <NewsList stock={"AMZN"} />
      </div>
    </main>
  )
}

export default TradePage