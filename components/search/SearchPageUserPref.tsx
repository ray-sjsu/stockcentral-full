import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const SearchPageUserPref = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session?.user ? (
        <section className="flex flex-col items-center">
          <h1>{`You are logged in as ${session.user.username}`}</h1>
        </section>
      ) : null}
    </>
  );
};

export default SearchPageUserPref;
