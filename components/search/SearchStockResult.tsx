import React from 'react'
import Link from 'next/link'
import { stockAPISearchEntry } from '@/lib/types'
import { FaRegBuilding } from "react-icons/fa";


const StockEntry = ({
  description="Company Name",
  displaySymbol="",
  symbol="null",
  type="null",
  imageUrl="/next.svg"
} : stockAPISearchEntry) => {

  const isFavorited = false
  let redirectUrl = `/trade/?stock=${displaySymbol}`
  if (!displaySymbol || displaySymbol === "") {
    redirectUrl = '/search'
  }

  return (
    <Link href={redirectUrl} className={`flex flex-row items-center w-full h-18 rounded bg-slate-400 p-2 text-sl border-cyan-500 border-solid ${isFavorited ? "border-2" : ""} ${!displaySymbol ? "pointer-events-none" : ""}`}>
        <div className="flex items-center justify-center h-full border aspect-square">
            {
                !imageUrl ? (
                    <FaRegBuilding height={50} width={50} className="bg-red-500 size-full" />
                ) : (
                    <img
                        src={imageUrl}
                        width={50}
                        height={50}
                        alt={`${displaySymbol} - ${description}`}
                        className="object-cover size-full"
                    />
                )
            }
        </div>
        <div className="flex flex-col truncate text-start justify-self-stretch text-sm grow ml-2">
            <h1>
                {displaySymbol}
            </h1>
            <p>
                {description}
            </p>
        </div>
    </Link>
  )
}

export default StockEntry