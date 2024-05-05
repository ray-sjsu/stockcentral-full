import React from "react";
import { BiTrendingUp, BiMoney } from "react-icons/bi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FiArrowUpCircle, FiArrowDownCircle } from "react-icons/fi";
import { IoIosWater } from "react-icons/io";
import { TbInfoCircle } from "react-icons/tb";
import { IoCash } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";

type InfoBoxProps = {
  title?: string;
  value?: string | number;
};

const iconClassStyles = "aspect-square size-32";

const MapKeyToIcon = {
  "current price": <MdAttachMoney className={`${iconClassStyles}`} />,
  "52 week high": <FiArrowUpCircle className={`${iconClassStyles}`} />,
  "52 week low": <FiArrowDownCircle className={`${iconClassStyles}`} />,
  "annual dividend yield": <FaMoneyBillAlt className={`${iconClassStyles}`} />,
  beta: <BiTrendingUp className={`${iconClassStyles}`} />,
  "annual net profit margin": <IoCash className={`${iconClassStyles}`} />,
  "liquidity ratio quarterly": <IoIosWater className={`${iconClassStyles}`} />,
  "price to earning annual": <BiMoney className={`${iconClassStyles}`} />,
  default: <TbInfoCircle className={`${iconClassStyles}`} />,
};

const InfoBox = ({ title = "default", value = "null" }: InfoBoxProps) => {
  if (typeof value === "string" && value.includes("None")) {
    value = "---";
  }

  return (
    <div className="flex flex-col items-center p-2 border-2 border-amber-500 rounded gap-x-2 gap-y-1 h-full">
      {MapKeyToIcon.hasOwnProperty(title)
        ? MapKeyToIcon[title as keyof typeof MapKeyToIcon]
        : MapKeyToIcon["default"]}
      <h1 className="capitalize text-center">{title}</h1>
      <p>{value}</p>
    </div>
  );
};

export default InfoBox;
