import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const SearchPageUserPref = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session?.user ? (
        <section className="flex flex-col items-center mb-7">
          <h1 className="text-red-500 text-2xl font-semibold">{`You are logged in as ${session.user.username}`}</h1>
        </section>
      ) : null}
    </>
  );
};

export default SearchPageUserPref;
