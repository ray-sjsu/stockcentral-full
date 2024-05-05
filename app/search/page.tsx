import SearchPageContent from "@/components/search/SearchPageContent";
import SearchPageUserPref from "@/components/search/SearchPageUserPref";
import BigLogoSection from "@/components/BigLogoSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "StockCentral, a place to trade stocks",
};

const SearchPage = () => {
  return (
    <main>
      <div className="w-full m-[10%]"></div>
      <BigLogoSection />
      <SearchPageContent />
      <SearchPageUserPref />
    </main>
  );
};

export default SearchPage;
