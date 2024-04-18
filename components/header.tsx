import React from 'react'

type HeaderProps = {
  stockSymbol: null
}

const Header = ({stockSymbol} : HeaderProps) => {
  return (
    <header className="box-border w-full bg-slate-500 absolute top-0 h-[40px] m-0">
      <h1>placeholder</h1>
    </header>
  )
}

export default Header