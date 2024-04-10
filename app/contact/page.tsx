import React from 'react'
import Nav from '@/components/navbar/NavBar'
import Image from 'next/image'
import Footer from '@/components/footer'

const ContactPage = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col items-center mt-10">
        <Image
          src="/stockcentral-logo.png"
          width={150}
          height={150}
          alt="StockCentral logo"
          className="m-4"
        />
        <h1 className="font-bold text-4xl">StockCentral</h1>
      </section>
      <h1>btw contact page</h1>
      <p>Raymund Mercader</p>
      <Footer />
      <Nav />
    </main>
  )
}

export default ContactPage