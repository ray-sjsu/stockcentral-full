import SignInForm from "@/components/forms/SignInForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import BigLogoSection from "@/components/BigLogoSection";

const SignInPage = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/profile");
  }

  return (
    <main className="w-full">
      <div className="w-full m-[10%]"></div>
      <BigLogoSection />
      <h1 className="text-center mb-5 text-3xl">Sign In</h1>
      <SignInForm />
    </main>
  );
};

export default SignInPage;
