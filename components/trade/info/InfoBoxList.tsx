import { stockAPIInfo } from '@/lib/types'
import React from 'react'
import InfoBox from './InfoBox'

type InfoBoxListProps = {
    otherInfo: stockAPIInfo | null
}

const InfoBoxList = ({ otherInfo } : InfoBoxListProps) => {
  return (
    <section className="grid grid-cols-3 gap-2">
        {otherInfo ? (
            Object.entries(otherInfo).map(([key, value]) => (
                <div key={value}>
                    <InfoBox title={key} value={value} />
                </div>
            ))
        ) : (
            <h1>Stock info not available</h1>
        )}
    </section>
  )
}

export default InfoBoxList