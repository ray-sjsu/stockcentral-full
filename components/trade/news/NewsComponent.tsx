import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiNewspaper } from "react-icons/pi";
type NewsComponentProps = {
  imageUrl: string;
  headline: string;
  source: string;
  unixTime: number;
  articleUrl: string;
  className: string;
};

const FormatDateTime = (unix: number, type: "date" | "time") => {
  const date = new Date(unix * 1000);
  if (type === "date") {
    return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}/${String(date.getDate()).padStart(2, "0")}`;
  } else {
    return date.toLocaleTimeString("en-us");
  }
};

const NewsComponent = ({
  imageUrl = "/next.svg",
  headline = "Breaking news",
  source = "@Source",
  unixTime = 0,
  articleUrl = "",
  className = "",
}: NewsComponentProps) => {
  return (
    <Link
      href={articleUrl}
      target="_blank"
      className={`flex flex-row items-center w-full h-20 rounded bg-amber-500 text-sl px-3 py-2 gap-y-1 gap-x-3 ${className}`}
    >
      <div className="flex items-center justify-center h-full aspect-square">
        {!imageUrl ? (
          <PiNewspaper height={100} width={100} className="size-full" />
        ) : (
          <Image src={imageUrl} width={100} height={100} alt={source} />
        )}
      </div>
      <div className="flex flex-col truncate text-start justify-self-stretch text-sm grow">
        <h1 className="text-wrap text-base font-semibold">{headline}</h1>
        <p className="text-sm italic">{source}</p>
      </div>
      <div className="flex flex-col text-xs overflow-auto shrink-0">
        <p className="text-end text-sm">
          {FormatDateTime(unixTime, "date")} <br></br>{" "}
          {FormatDateTime(unixTime, "time")} <br></br>
        </p>
      </div>
    </Link>
  );
};

export default NewsComponent;
