import SignInForm from "@/components/forms/SignInForm";
import React from "react";
import BigLogoSection from "@/components/BigLogoSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "StockCentral, a place to trade stocks",
};

const SignInPage = () => {
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
