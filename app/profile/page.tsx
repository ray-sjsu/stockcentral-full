import BigLogoSection from "@/components/BigLogoSection";
import SignOutButton from "@/components/forms/SignOutButton";
import { authOptions } from "@/lib/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import React from "react";

export const metadata: Metadata = {
  title: "Profile",
  description: "StockCentral, a place to trade stocks",
};

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <main className="w-full">
      <div className="w-full m-[10%]"></div>
      <BigLogoSection />
      <section className="w-full flex flex-col justify-center items-center">
        <h1>Profile Page</h1>
        <p>Welcome, {session ? session.user.username : "Unauthorized User"}</p>
        <SignOutButton />
      </section>
    </main>
  );
};

export default ProfilePage;
