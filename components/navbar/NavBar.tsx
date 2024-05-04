import React from "react";
import { TbSearch } from "react-icons/tb";
import { TbDiamond } from "react-icons/tb";
import NavIcon from "./NavIcon";
import NavUserButton from "./NavUserButton";

const NavBar = () => {

  return (
    <nav className="box-border w-full bg-red-700 fixed inset-x-0 bottom-0 h-20 z-10">
      <div className="flex flex-row flex-nowrap items-center justify-around h-full w-full grow">
        <NavIcon
          href="/search"
          className="h-1/2"
          iconElement={<TbSearch className="size-full" />}
        />
        <NavIcon
          href="/trade"
          className="h-4/6"
          iconElement={<TbDiamond className="size-full" />}
        />
        <NavUserButton />
      </div>
    </nav>
  );
};

export default NavBar;
