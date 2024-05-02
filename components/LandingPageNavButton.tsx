import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const LandingPageNavButton = async () => {
  const session = await getServerSession(authOptions);

  return (
    <Link
      className="py-3 px-8 bg-amber-500 cursor-pointer text-2xl rounded-full"
      href={session ? "/trade" : "/sign-in"}
    >
      {session ? "Trade" : "Join"}
    </Link>
  );
};

export default LandingPageNavButton;
