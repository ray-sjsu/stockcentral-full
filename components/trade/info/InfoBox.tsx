import React from 'react'
import { BiTrendingUp, BiMoney } from 'react-icons/bi';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FiArrowUpCircle, FiArrowDownCircle } from 'react-icons/fi';
import { IoIosWater } from 'react-icons/io';
import { TbInfoCircle } from "react-icons/tb";
import { IoCash } from "react-icons/io5";

type InfoBoxProps = {
    iconElement?: React.ReactNode,
    title?: string,
    value?: string | number,
}

const MapKeyToIcon = {
  '52 week high': <FiArrowUpCircle className="size-full" />,
  '52 week low': <FiArrowDownCircle className="size-full" />,
  'annual dividend yield': <FaMoneyBillAlt className="size-full" />,
  'beta': <BiTrendingUp className="size-full" />,
  'annual net profit margin': <IoCash className="size-full" />,
  'liquidity ratio quarterly': <IoIosWater className="size-full" />,
  'price to earning annual': <BiMoney className="size-full" />,
  'default': <TbInfoCircle className="size-full" />
}

const InfoBox = ({
    iconElement,
    title="default",
    value="null",
} : InfoBoxProps) => {
  if (typeof value === 'string' && value.includes("None")) {
    value = "unknown"
  }

  return (
    <div className="flex flex-col items-center p-2 border border-red-500 rounded gap-x-2 gap-y-1">
      { MapKeyToIcon.hasOwnProperty(title) ? MapKeyToIcon[title as keyof typeof MapKeyToIcon] : MapKeyToIcon['default']}
      <h1 className="capitalize text-center">{title}</h1>
      <p>{value}</p>
    </div>
  )
}

export default InfoBox