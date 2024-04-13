import { retrieveStockInfo } from '@/lib/actions';
import { stockAPINewsArray } from '@/lib/types';
import React from 'react'
import NewsComponent from '../NewsComponent';

type NewsListProps = {
    stock: string
}

const NewsList = async ({ stock }: NewsListProps) => {
    const newsData: stockAPINewsArray = await retrieveStockInfo(stock, "news")
    console.log(`newsData: ${newsData}`)
    return (
        <section className="flex flex-col gap-2">
            {
                Array.isArray(newsData) && newsData.length > 0 ?
                    newsData.map((entry, index) => (
                        <div key={index}>
                            <NewsComponent
                                key={index}
                                imageUrl={entry.image}
                                headline={entry.headline}
                                source={entry.source}
                                unixTime={entry.datetime}
                                articleUrl={entry.url}
                                className={''}                            
                            />
                        </div>
                    ))
                : (<h1>News Data not available</h1>)
            }
        </section>
    )
}

export default NewsList