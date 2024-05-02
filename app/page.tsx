import React from "react";
import Image from "next/image";
import LandingPageNavButton from "@/components/LandingPageNavButton";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-10">
      <section className="flex flex-col items-center mt-10">
        <Image
          src="/stockcentral-logo.png"
          width={150}
          height={150}
          alt="StockCentral logo"
          className="m-4"
        />
        <h2 className="font-bold text-4xl">StockCentral</h2>
      </section>
      <section className="flex flex-col items-center mt-20 space-y-4">
        <h1 className="text-xl text-center">Chart your Potential</h1>
        <LandingPageNavButton />
      </section>
      <section className="flex flex-col items-center mt-20 space-y-4">
        <p className="w-60 text-pretty text-center text-lg">
          The premier destination for seemless trading. Explore stocks and
          equitites.
        </p>
      </section>
    </main>
  );
};

export default Home;
