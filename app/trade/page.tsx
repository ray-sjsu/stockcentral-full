import NewsComponent from '@/components/NewsComponent'
import BarChart from '@/components/charts/BarChart'
import Header from '@/components/header'
import Nav from '@/components/navbar/NavBar'
import React from 'react'



const TradePage = () => {

  return (
    <main className="flex flex-col items-center mt-10">
      <Header />
      <h1 className="mt-10">trade page</h1>
      <div className="flex flex-col w-10/12">
        <NewsComponent className='my-2'/>
        <NewsComponent className='my-2'/>
        <NewsComponent className='my-2'/>
        <BarChart />
      </div>
      <Nav />
    </main>
  )
}

export default TradePage