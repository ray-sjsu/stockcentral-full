'use client';
import SearchMain from '@/components/search/SearchMain';
import { retrieveStockSearchList } from '@/lib/actions';
import React, { useEffect, useState } from 'react'

const SearchPageContent = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
      const retrieveSearchData = async () => {
          const stockSearchArray = await retrieveStockSearchList(searchQuery)
          setSearchResults(stockSearchArray)
          setIsSubmitting(false)
      }
      if (isSubmitting) {
          retrieveSearchData()
      }
  }, [isSubmitting])
  
  const handleSearch = (query : string) => {
      const input = query.toUpperCase()
      if (/^[A-Za-z]*$/.test(input)) {
          setSearchQuery(input)
      }
  }
  const handleOnClick = () => {
      setIsSubmitting(true)
  }

  return (
      <section className="flex flex-col items-center">
          <div>
              <h1>Search Page</h1>
              <input type="text" onChange={e => handleSearch(e.target.value)} value={searchQuery} placeholder="Stock Symbol" className='text-red-500' maxLength={5} pattern="^[A-Za-z]*$" />
              <button onClick={handleOnClick} className="p-2 bg-slate-600">Search</button>
          </div>
          <div className='flex flex-col gap-2'>
              <p>{`search box search query: ${searchQuery}`}</p>
              <p>{`is submitted: ${isSubmitting}`}</p>
          </div>
          <hr className="border w-full"></hr>
          <div className="flex flex-col gap-2">
              <h1>Results</h1>
              {
                  searchResults.length > 0 ? (
                      <SearchMain searchArray={searchResults} />
                  )
                  : (
                      <h1>No valid results</h1>
                  )
              }
          </div>
      </section>
  )
}
export default SearchPageContent