import Link from 'next/link'
import React from 'react'
import { TbQuestionMark } from "react-icons/tb"

type NavIconProps = {
    href?: string,
    className?: string,
    iconElement?: React.ReactNode
}

const NavIcon = ({
    href="/404",
    className="",
    iconElement=<TbQuestionMark className="size-full" />,
} : NavIconProps) => {


  return (
    <Link href={href} className={`cursor-pointer aspect-square flex justify-center items-center ${className}`}>
        {iconElement}
    </Link>
  )
}

export default NavIcon
