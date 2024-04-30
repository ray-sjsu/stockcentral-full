import React from 'react'
import StockEntry from './SearchStockResult'
import { stockAPISearchArray } from '@/lib/types/types'


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
                <div key={index} className="w-full gap-2">
                    <StockEntry description={entry.description} displaySymbol={entry.displaySymbol} symbol={''} type={''} image={entry.image} />
                </div>
            ))
            ) : null
          }
      </section>
  )
}

export default SearchMain