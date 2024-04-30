import TradePageContent from "@/components/trade/TradePageContent";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const TradePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const session = await getServerSession(authOptions)

  if (!searchParams.stock) {
    redirect("/trade?stock=AAPL");
  }
  return (
    <section>
      <TradePageContent />
    </section>
  );
};

export default TradePage;
