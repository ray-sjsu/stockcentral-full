import Image from 'next/image'
import React from 'react'

type NewsComponentProps = {
    imageUrl?: string,
    headline?: string,
    source?: string,
    unixTime?: number,
    articleUrl?: string,
    className?: string,
}

const FormatDate = (unix : number, type : "date" | "time") => {
    const date = new Date(unix * 1000);
    if (type === "date") {
        return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`
    } else {
        return date.toLocaleTimeString('en-us')
    }
}

const NewsComponent = ({
    imageUrl="/next.svg",
    headline="Breaking news",
    source="@Source",
    unixTime=0,
    articleUrl="",
    className="",
} : NewsComponentProps) => {
  return (
    <div className={`flex flex-row items-center w-full h-18 rounded bg-slate-400 p-2 text-sl ${className}`}>
        <Image
            src={imageUrl}
            width={50}
            height={50}
            alt={source}
            className="mx-2"
        />
        <div className="flex flex-col truncate text-start justify-self-stretch text-sm grow">
            <h1>
                {headline}
            </h1>
            <p>
                {source}
            </p>
        </div>
        <div className="flex flex-col text-xs overflow-auto">
            <p className='text-end'>
                {FormatDate(unixTime, "date")} <br></br> {FormatDate(unixTime, "time")}
            </p>
        </div>
    </div>
  )
}

export default NewsComponent