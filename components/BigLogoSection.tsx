import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type BigLogoSectionProps = {
    className?: string
}

const BigLogoSection = ({className} : BigLogoSectionProps) => {
  return (
    <section className="mb-20">
    <Link
      href="/"
      className="flex flex-row items-center justify-center gap-2 mx-4 my-1 flex-1"
    >
      <Image
        src="/stockcentral-logo.png"
        width={100}
        height={100}
        alt="StockCentral logo"
        className="aspect-square items-center"
      />
      <h1 className="text-5xl">StockCentral</h1>
    </Link>
  </section>
  )
}

export default BigLogoSection