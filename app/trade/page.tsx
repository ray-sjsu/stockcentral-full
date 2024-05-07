import TradePageContent from "@/components/trade/TradePageContent";
import { DEFAULT_TRADE_LINK } from "@/lib/global";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "Trade",
  description: "StockCentral Trade Page",
};

const TradePage = ({ searchParams }: Props) => {
  if (!searchParams.stock) {
    redirect(DEFAULT_TRADE_LINK);
  }

  return <TradePageContent />;
};

export default TradePage;
