import SearchPageContent from "@/components/search/SearchPageContent";
import SearchPageUserPref from "@/components/search/SearchPageUserPref";

const SearchPage = () => {
  return (
    <main>
      <div className="w-full m-[10%]"></div>
      <SearchPageContent />
      <SearchPageUserPref />
    </main>
  );
};

export default SearchPage;
