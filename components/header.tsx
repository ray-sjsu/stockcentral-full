import React from 'react'

type HeaderProps = {
  stockLogo?: string,
  stockSymbol?: string,
  companyName?: string,
  stockPrice?: number,
}

const Header = () => {
  return (
    <header className="box-border w-full bg-slate-500 absolute top-0 h-[40px] m-0">

    </header>
  )
}

export default Header