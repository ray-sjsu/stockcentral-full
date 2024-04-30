import { stockAPIInfo } from '@/lib/types/types'
import React from 'react'
import InfoBox from './InfoBox'

type InfoBoxListProps = {
    otherInfo: stockAPIInfo | null
    currentPrice: number | null
}

const InfoBoxList = ({ otherInfo, currentPrice } : InfoBoxListProps) => {
  return (
    <div className="grid grid-cols-4 gap-2">
        {currentPrice ? (
            <InfoBox title={`current price`} value={currentPrice} />
        ): null}
        {otherInfo ? (
            Object.entries(otherInfo).map(([key, value]) => (
                <div key={value}>
                    <InfoBox title={key} value={value} />
                </div>
            ))
        ) : (
            <h1>Stock info not available</h1>
        )}
    </div>
  )
}

export default InfoBoxList