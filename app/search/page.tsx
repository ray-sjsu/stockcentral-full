'use client';
import SearchMain from '@/components/search/SearchMain';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'


const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [isSearching, setIsSearching] = useState(false)

    const searchParams = useSearchParams()
    const stock = searchParams.get("stock")
    const timeout = 5 * 1000;

    const handleSearch = (query : string) => {
        setIsSearching(true)
        setSearchQuery(query)
        const timer = setTimeout(() => {
            // call stocksearch API
            
            setIsSearching(false)
            
        }, timeout)
    }

    const handleOnClick = () => {
    }

    return (
        <main className="flex flex-col items-center">
            <section>
                <h1>Search Page</h1>
                <input type="text" onChange={e => handleSearch(e.target.value)} placeholder="Company Name or Stock" className='text-red-500' />
                <p>{`stock param: ${stock}`}</p>
                <p>{`search box search query: ${searchQuery}`}</p>
                <p>{`isSearching: ${isSearching}`}</p>
                <button onClick={handleOnClick} className="p-2 bg-slate-600">Search</button>
                <SearchMain searchArray={null} />
            </section>
        </main>
    )
}

export default SearchPage