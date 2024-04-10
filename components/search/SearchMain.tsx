import React from 'react'
import StockEntry from './SearchStockResult'

const SearchMain = () => {
  return (
    <section className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
            <input type="text" required maxLength={10} placeholder="search" className="m-2 p-1" />
            <StockEntry isFavorited={false} />
            <StockEntry isFavorited={true} />
        </div>
    </section>
  )
}

export default SearchMain