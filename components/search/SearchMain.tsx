import React from 'react'
import StockEntry from './SearchStockResult'
import { stockAPISearchArray } from '@/lib/types'


type SearchMainProps = {
  searchArray: stockAPISearchArray
}

const SearchMain = ({
  searchArray
} : SearchMainProps) => {

  return (
      <section className="flex flex-col justify-center items-center gap-2 w-full mt-2">
          {
            !searchArray ? (
              <div className="w-full flex flex-col gap-2">
                <StockEntry />
                <StockEntry />
              </div>
            ) : <h1>No relevant Stock Symbols</h1>
          }
      </section>
  )
}

export default SearchMain