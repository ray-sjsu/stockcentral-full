import React from 'react'
import { TbChartArea } from "react-icons/tb"
import Image from 'next/image'

type NewsComponentProps = {
    imageUrl: string,
    headline: string,
    source: string,
    unixTime: number,
    articleUrl: string,
    className: string,
}

const FormatDateTime = (unix : number, type : "date" | "time") => {
    const date = new Date(unix * 1000);
    if (type === "date") {
        return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
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
    <a href={articleUrl} target="_blank" className={`flex flex-row items-center gap-x-2 w-full h-20 rounded bg-slate-400 p-2 text-sl ${className}`}>
        <div className="flex items-center justify-center h-full border aspect-square">
            {
                !imageUrl ? (
                    <TbChartArea height={50} width={50} className="bg-red-500 size-full" />
                ) : (
                    <Image
                        src={imageUrl}
                        width={50}
                        height={50}
                        alt={source}
                        className="object-cover size-full"
                    />
                )
            }
        </div>
        <div className="flex flex-col truncate text-start justify-self-stretch text-sm grow">
            <h1 className="text-wrap">{headline}</h1>
            <p>{source}</p>
        </div>
        <div className="flex flex-col text-xs overflow-auto shrink-0">
            <p className='text-end'>
                {FormatDateTime(unixTime, "date")} <br></br> {FormatDateTime(unixTime, "time")} <br></br>
            </p>
        </div>
    </a>
  )
}

export default NewsComponent