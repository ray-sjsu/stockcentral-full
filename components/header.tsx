import React from 'react'
import StockEntry from './search/SearchStockResult'

type HeaderProps = {
  stockLogo?: string,
  stockSymbol?: string,
  companyName?: string,
  stockPrice?: number,
}

const Header = () => {
  return (
    <header className="box-border w-full bg-slate-500 absolute top-0 h-[40px] m-0">
        <StockEntry isFavorited={false} />
    </header>
  )
}

export default Header