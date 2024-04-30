"use client";
import React from "react";
import NavIcon from "./NavIcon";
import { TbMenu2, TbUser } from "react-icons/tb";
import { useSession } from "next-auth/react";

const NavUserButton = () => {
  const session = useSession();
  const isLoggedIn = session.data?.user

  return (
    <NavIcon
      href={isLoggedIn ? "/profile" : "/sign-in"}
      className="h-4/6"
      iconElement={isLoggedIn ? <TbUser className="size-full" /> : <TbMenu2 className="size-full" />}
    />
  );
};

export default NavUserButton;
