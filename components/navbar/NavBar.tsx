import React from "react";
import { TbSearch } from "react-icons/tb";
import { TbDiamond } from "react-icons/tb";
import NavIcon from "./NavIcon";
import NavUserButton from "./NavUserButton";
import { DEFAULT_TRADE_LINK } from "@/lib/global";

const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-row flex-nowrap items-center justify-around h-full w-full grow">
        <NavIcon
          href="/search"
          className="h-1/2"
          iconElement={<TbSearch className="size-full" />}
        />
        <NavIcon
          href={DEFAULT_TRADE_LINK}
          className="h-4/6"
          iconElement={<TbDiamond className="size-full" />}
        />
        <NavUserButton />
      </div>
    </nav>
  );
};

export default NavBar;
