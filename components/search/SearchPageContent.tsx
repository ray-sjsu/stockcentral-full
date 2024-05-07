"use client";
import SearchResultList from "@/components/search/SearchMain";
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
          maxLength={5}
          pattern="^[A-Za-z]*$"
          disabled={isSubmitting}
        />
        <button
          onClick={handleOnClick}
          className="flex flex-row gap-1"
          disabled={isSubmitting || searchQuery.length === 0}
          type="submit"
        >
          <TbSearch className="h-full size-5" />
          Search
        </button>
      </form>
      <hr></hr>
      <div className="flex flex-col gap-2">
        {firstSearch ? (
          <div className="flex flex-row items-center justify-center gap-2">
            <FaList className="size-6" />
            <h1 className="text-3xl">Results</h1>
          </div>
        ) : null}

        {isSubmitting ? (
          <RiLoader5Fill className="animate-spin size-full w-50 h-50" />
        ) : null}
        {!isSubmitting && firstSearch && searchResults && searchResults.length == 0 ? (
          <div className="flex flex-row items-center justify-center gap-2">
            <FaQuestionCircle className="size-5" />
            <p className="text-2xl">No relevant results!</p>
          </div>
        ) : null}
        {!isSubmitting && !searchResults ? (
          <div className="flex flex-row items-center justify-center gap-2">
            <LuServerCrash className="size-5" />
            <p className="text-2xl">API Down</p>
          </div>
        ) : null}
        {!firstSearch ? (
          <div className="flex flex-row items-center justify-center gap-2">
            <AiOutlineStock className="size-8" />
            <p className="text-2xl">Search a stock ticker!</p>
          </div>
        ) : null}
        {searchResults && searchResults.length > 0 && !isSubmitting ? (
          <SearchResultList searchArray={searchResults} />
        ) : null}
      </div>
    </section>
  );
};
export default SearchPageContent;
