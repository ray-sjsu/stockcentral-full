import { stockAPICompanyProfile } from "@/lib/types/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsQuestionCircleFill } from "react-icons/bs";
import { RiLoader5Fill } from "react-icons/ri";

type HeaderProps = {
  stockCompany: stockAPICompanyProfile | null;
  currentPrice: number | null;
  isLoading: boolean;
};

const StockHeader = ({
  stockCompany,
  currentPrice,
  isLoading,
}: HeaderProps) => {
  return (
    <header className="flex flex-row box-border w-full bg-slate-500 absolute top-0 justify-between">
      {isLoading ? (
        <div className="flex flex-row items-center gap-3 mx-4 my-1 flex-1">
          <RiLoader5Fill className="animate-spin aspect-square items-center rounded-full w-[50px] h-[50px]" />
          <div>
            <h1>Loading names...</h1>
            <h1>Loading industry...</h1>
            <h1>Loading exchange...</h1>
          </div>
        </div>
      ) : null}
      {stockCompany && !isLoading ? (
        <div className="flex flex-row items-center gap-3 mx-4 my-1 flex-1">
          <a href={stockCompany.weburl}>
            <img
              src={stockCompany.logo}
              width={50}
              height={50}
              alt={`${stockCompany.name} logo - ${stockCompany.ticker}`}
              className="aspect-square items-center rounded-full"
            />
          </a>
          <div>
            <h1>{`${stockCompany.name} - ${stockCompany.ticker}`}</h1>
            <h1>{`Country: ${stockCompany.country} - ${stockCompany.finnhubIndustry}`}</h1>
            <h1>{`${stockCompany.exchange}`}</h1>
          </div>
        </div>
      ) : null}
      {!stockCompany && !isLoading ? (
        <div className="flex flex-row items-center gap-3 mx-4 my-1 flex-1">
          <Link href="/search">
            <BsQuestionCircleFill className="aspect-square items-center rounded-full w-[50px] h-[50px]" />
          </Link>
          <div>
            <h1>{`Company Name - Ticker Symbol`}</h1>
            <h1>{`Country - Industry`}</h1>
            <h1>{`Stock Exchange`}</h1>
          </div>
        </div>
      ) : null}
      {!isLoading ? (
        <div className="flex justify-center items-center mx-4 my-1 flex-1">
          {currentPrice && currentPrice !== 0 ? (
            <h1 className="text-center text-2xl">{`@ $${currentPrice}`}</h1>
          ) : (
            <h1>No current price</h1>
          )}
        </div>
      ) : null}
      <Link href="/" className="flex flex-row items-center gap-2 mx-4 my-1 flex-1 justify-end">
        <Image
          src="/stockcentral-logo.png"
          width={50}
          height={50}
          alt="StockCentral logo"
          className="aspect-square items-center"
        />
        <h1 className="text-2xl">StockCentral</h1>
      </Link>
    </header>
  );
};

export default StockHeader;
