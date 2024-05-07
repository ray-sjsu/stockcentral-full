"use client";
import StockHeader from "@/components/trade/StockHeader";
import ChartList from "@/components/trade/charts/ChartList";
import InfoBoxList from "@/components/trade/info/InfoBoxList";
import NewsList from "@/components/trade/news/NewsList";
import { retrieveStockInfo } from "@/lib/actions";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiLoader5Fill } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";
import { TbSearch } from "react-icons/tb";

type APIStatusType = "loading" | "success" | "error";

const TradePageContent = () => {
  const searchParams = useSearchParams();
  const stockQuery = searchParams.get("stock");
  const [stockData, setStockData] = useState([]);
  const [APIStatus, setAPIStatus] = useState<APIStatusType>("loading");

  useEffect(() => {
    const retrieveData = async () => {
      const stockDataArray = await retrieveStockInfo(stockQuery, "all");
      setStockData(stockDataArray);

      if (!stockDataArray) {
        setAPIStatus("error");
        document.title = "Error";
      } else {
        setAPIStatus("success");
        document.title = stockQuery || "Trade";
      }
    };
    document.title = "Loading..."
    retrieveData();
  }, []);

  return (
    <>
      <StockHeader
        stockCompany={stockData ? stockData[4] : null}
        currentPrice={stockData ? stockData[0] : null}
        isLoading={APIStatus === "loading"}
      />
      <main className="flex flex-col gap-6">
        <section className="flex flex-col items-center">
          <div className="flex flex-col w-10/12">
            {APIStatus === "error" ? (
              <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl text-center">
                  There has been an API error. <br></br>Or, entered invalid
                  stock symbol.
                </h1>
                <FaRegTrashAlt className="size-20 w-100 h-100" />
                <Link
                  href="/search"
                  className="p-2 bg-slate-500 text-red-500 flex flex-row gap-2 items-center text-2xl rounded"
                >
                  <TbSearch className="h-full size-5" />
                  Search Page
                </Link>
              </div>
            ) : null}
            {APIStatus === "loading" ? (
              <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl">Loading...</h1>
                <RiLoader5Fill className="animate-spin size-20 w-100 h-100" />
              </div>
            ) : null}
          </div>
        </section>
        {APIStatus === "success" ? (
          <section>
            <h1 className="text-3xl mb-4">Overview</h1>
            <InfoBoxList otherInfo={stockData[1]} currentPrice={stockData[0]} />
          </section>
        ) : null}
        {APIStatus === "success" ? (
          <section>
            <hr className="w-full my-8"></hr>
            <h1 className="text-3xl mb-4">Charts</h1>
            <ChartList chartData={stockData[2]} />
          </section>
        ) : null}
        {APIStatus === "success" ? (
          <section>
            <hr className="w-full my-8"></hr>
            <h1 className="text-3xl mb-4">News</h1>
            <NewsList newsData={stockData[3]} />
          </section>
        ) : null}
      </main>
    </>
  );
};

export default TradePageContent;
