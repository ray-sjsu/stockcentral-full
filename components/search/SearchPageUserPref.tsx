"use client";
import { getSession } from "next-auth/react";
import React from "react";

const SearchPageUserPref = async () => {
  const session = await getSession();
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
