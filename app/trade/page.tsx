import TradePageContent from "@/components/trade/TradePageContent";
import { redirect } from "next/navigation";

const TradePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {

  if (!searchParams.stock) {
    redirect("/trade?stock=AAPL");
  }
  return (
    <TradePageContent />
  );
};

export default TradePage;
