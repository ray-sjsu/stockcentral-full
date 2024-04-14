import React from 'react'
import StockEntry from './search/SearchStockResult'

type HeaderProps = {
  stockLogo?: string,
  stockSymbol?: string | null,
  companyName?: string,
  stockPrice?: number,
}

const Header = ({
  stockSymbol
} : HeaderProps) => {
  return (
    <header className="box-border w-full bg-slate-500 absolute top-0 h-[40px] m-0">
        <StockEntry isFavorited={false} tickerName={stockSymbol ? stockSymbol : ""} />
    </header>
  )
}

export default Header