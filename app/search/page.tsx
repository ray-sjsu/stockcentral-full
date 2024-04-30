import SearchPageContent from "@/components/search/SearchPageContent";
import SearchPageUserPref from "@/components/search/SearchPageUserPref";
import BigLogoSection from "@/components/BigLogoSection";

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
