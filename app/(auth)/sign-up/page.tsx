import SignUpForm from "@/components/forms/SignUpForm";
import React from "react";
import BigLogoSection from "@/components/BigLogoSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "StockCentral, a place to trade stocks",
};

const SignUpPage = () => {
  return (
    <section className="w-full">
      <div className="w-full m-[10%]"></div>
      <BigLogoSection />
      <h1 className="text-center mb-5 text-3xl">Sign Up</h1>
      <SignUpForm />
    </section>
  );
};

export default SignUpPage;
