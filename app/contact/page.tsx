import React from 'react'
import Nav from '@/components/navbar/NavBar'
import Image from 'next/image'
import Footer from '@/components/footer'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

const ContactPage = async () => {
  const session = await getServerSession(authOptions)

  return (
    <section className="flex flex-col items-center justify-center">
      {
        session?.user ? <h1>Hello, {session.user.name}</h1> : null
      }
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
      <p>Last Name first Name</p>
      <Footer />
      <Nav />
    </section>
  )
}

export default ContactPage