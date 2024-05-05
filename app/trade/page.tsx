import TradePageContent from "@/components/trade/TradePageContent";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const stock = searchParams.stock || "Trade";
  let title = "";
  let description = "StockCentral Trade Page";
  if (typeof stock === "string") {
    title = stock;
  } else {
    title = stock[0] || "Trade";
  }

  return {
    title,
    description,
  };
}

const TradePage = async ({ searchParams }: Props) => {
  if (!searchParams.stock) {
    redirect("/trade?stock=AAPL");
  }

  return <TradePageContent />;
};

export default TradePage;
