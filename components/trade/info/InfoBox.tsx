import React from 'react'
import { TbInfoCircle } from "react-icons/tb";

type InfoBoxProps = {
    iconElement?: React.ReactNode,
    title?: string,
    value?: string,
}

const InfoBox = ({
    iconElement=<TbInfoCircle className="size-full" />,
    title="info-missing",
    value="null",
} : InfoBoxProps) => {
  return (
    <div className="flex flex-col items-center p-2 border border-red-500 rounded gap-x-2 gap-y-1">
      {iconElement }
      <p>{title}</p>
      <p>{value}</p>
    </div>
  )
}

export default InfoBox