'use client';
import SearchMain from '@/components/search/SearchMain';
import { retrieveStockSearchList } from '@/lib/actions';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [submitted, setSubmitted] = useState(false)

    const searchParams = useSearchParams()
    const stock = searchParams.get("stock")

    useEffect(() => {
        const retrieveSearchData = async () => {
            const stockSearchArray = await retrieveStockSearchList(searchQuery)
            setSearchResults(stockSearchArray)
            setSubmitted(false)
        }
        if (submitted) {
            retrieveSearchData()
        }
    }, [submitted])
    

    const handleSearch = (query : string) => {
        setSearchQuery(query)
    }

    const handleOnClick = () => {
        setSubmitted(true)
    }

    return (
        <main className="flex flex-col items-center">
            <section>
                <h1>Search Page</h1>
                <input type="text" onChange={e => handleSearch(e.target.value)} placeholder="Stock Symbol" className='text-red-500' />
                <button onClick={handleOnClick} className="p-2 bg-slate-600">Search</button>
            </section>
            <div className='flex flex-col gap-2'>
                <p>{`search box search query: ${searchQuery}`}</p>
                <p>{`is submitted: ${submitted}`}</p>
            </div>
            <hr className="border w-full"></hr>
            <section className="flex flex-col gap-2">
                <h1>Results</h1>
                {
                    searchResults.length > 0 ? (
                        <SearchMain searchArray={searchResults} />
                    )
                    : (
                        <h1>No valid results</h1>
                    )
                }
            </section>
        </main>
    )
}

export default SearchPage