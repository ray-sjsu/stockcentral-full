import React from "react";
import Link from "next/link";
import { stockAPISearchEntry } from "@/lib/types/types";
import Image from "next/image";
import { AiFillInfoCircle } from "react-icons/ai";

const StockEntry = ({
  description = "Company Name",
  displaySymbol = "",
  image = "/next.svg",
}: stockAPISearchEntry) => {
  let redirectUrl = `/trade/?stock=${displaySymbol}`;
  if (!displaySymbol || displaySymbol === "") {
    redirectUrl = "/search";
  }

  return (
    <Link
      href={redirectUrl}
      className={`flex flex-row items-center bg-amber-500 w-full h-18 rounded px-3 py-2 gap-y-1 gap-x-3 text-sl border-solid`}
    >
      <div className="flex items-center justify-center aspect-square h-12">
        {!image ? (
          <AiFillInfoCircle height={100} width={100} className="size-full" />
        ) : (
          <Image
            src={image}
            width={100}
            height={100}
            alt={`${displaySymbol} - ${description}`}
          />
        )}
      </div>
      <div className="flex flex-col truncate text-start justify-self-stretch text-sm grow">
        <h1 className="text-2xl text-bold">{displaySymbol}</h1>
        <p className="text-lg capitalize">{description.toLowerCase()}</p>
      </div>
    </Link>
  );
};

export default StockEntry;
