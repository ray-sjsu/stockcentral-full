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
            searchArray ? (
              searchArray.map((entry, index) => (
                <div key={index}>
                    <StockEntry description={entry.description} displaySymbol={entry.displaySymbol} symbol={''} type={''} imageUrl={entry.imageUrl} />
                </div>
            ))
            ) : <h1>No relevant Stock Symbols</h1>
          }
      </section>
  )
}

export default SearchMain