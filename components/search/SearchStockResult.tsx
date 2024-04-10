import React from 'react'
import Image from 'next/image'

type StockEntryProps = {
  imageUrl?: string,
  companyName?: string,
  tickerName?: string,
  isFavorited: boolean,
}

const StockEntry = ({
  imageUrl="/next.svg",
  companyName="company",
  tickerName="1111",
  isFavorited=false,
} : StockEntryProps) => {
  return (
    <div className={`flex flex-row items-center w-full h-18 rounded bg-slate-400 p-2 text-sl border-cyan-500 border-solid ${isFavorited ? "border-2" : ""}`}>
        <Image
            src={imageUrl}
            width={50}
            height={50}
            alt={`${tickerName} - ${companyName}`}
            className="mx-2"
        />
        <div className="flex flex-col truncate text-start justify-self-stretch text-sm grow ml-2">
            <h1>
                {tickerName}
            </h1>
            <p>
                {companyName}
            </p>
        </div>
    </div>
  )
}

export default StockEntry