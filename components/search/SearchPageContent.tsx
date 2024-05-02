"use client";
import SearchMain from "@/components/search/SearchMain";
import { retrieveStockSearchList } from "@/lib/actions";
import React, { useEffect, useState } from "react";
import { RiLoader5Fill } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { TbSearch } from "react-icons/tb";
import { LuServerCrash } from "react-icons/lu";

const SearchPageContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<[] | null>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [firstSearch, setFirstSearch] = useState(false);

  useEffect(() => {
    const retrieveSearchData = async () => {
      const stockSearchArray = await retrieveStockSearchList(searchQuery);
      setSearchResults(stockSearchArray);
      setIsSubmitting(false);
    };
    if (isSubmitting) {
      retrieveSearchData();
    }
  }, [isSubmitting, searchQuery]);

  const handleSearch = (query: string) => {
    const input = query.toUpperCase();
    if (/^[A-Za-z]*$/.test(input)) {
      setSearchQuery(input);
    }
  };
  const handleOnClick = () => {
    setIsSubmitting(true);
    setFirstSearch(true);
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <form className="flex flex-row gap-2">
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchQuery}
          placeholder="Stock Symbol"
          className="text-red-500 rounded px-2"
          maxLength={5}
          pattern="^[A-Za-z]*$"
          disabled={isSubmitting}
        />
        <button
          onClick={handleOnClick}
          className="p-2 bg-slate-600 rounded flex flex-row gap-1"
          disabled={isSubmitting}
          type="submit"
        >
          <TbSearch className="h-full size-4" />
          Search
        </button>
      </form>
      <hr className="w-[40%] border my-8"></hr>
      <div className="flex flex-col gap-2">
        {firstSearch ? (
          <div className="flex flex-row items-center justify-center gap-2">
            <FaList className="h-full size-4" />
            <h1 className="text-3xl">Results</h1>
          </div>
        ) : null}

        {isSubmitting ? (
          <RiLoader5Fill className="animate-spin size-full w-50 h-50" />
        ) : null}
        {!isSubmitting && firstSearch && searchResults && searchResults.length == 0 ? (
          <div className="flex flex-row items-center justify-center gap-2">
            <FaQuestionCircle />
            <p className="text-2xl">No relevant results!</p>
          </div>
        ) : null}
        {!isSubmitting && !searchResults ? (
          <div className="flex flex-row items-center justify-center gap-2">
            <LuServerCrash />
            <p className="text-2xl">API Down</p>
          </div>
        ) : null}
        {!firstSearch ? (
          <div className="flex flex-row items-center justify-center gap-2">
            <AiOutlineStock />
            <p className="text-2xl">Search a stock ticker!</p>
          </div>
        ) : null}
        {searchResults && searchResults.length > 0 && !isSubmitting ? (
          <SearchMain searchArray={searchResults} />
        ) : null}
      </div>
      <hr className="w-[40%] border my-8"></hr>
    </section>
  );
};
export default SearchPageContent;
