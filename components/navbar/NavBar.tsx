import React from 'react'
import { TbSearch } from "react-icons/tb";
import { TbMenu2 } from "react-icons/tb";
import { TbDiamondFilled } from "react-icons/tb";
import NavIcon from './NavIcon';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const NavBar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="box-border w-full bg-red-700 fixed inset-x-0 bottom-0 h-20 z-10">
      <div className="flex flex-row flex-nowrap items-center justify-around h-full w-full grow">
        <NavIcon href="/search" className="h-1/2" iconElement={<TbSearch className="size-full"/>} />
        <NavIcon href="/trade" className="h-4/6" iconElement={<TbDiamondFilled className="size-full"/>} />
        <NavIcon href={ session?.user ? "/profile" : "/sign-in" } className="h-4/6" iconElement={<TbMenu2 className="size-full"/>} />
      </div>
    </nav>
  )
}

export default NavBar