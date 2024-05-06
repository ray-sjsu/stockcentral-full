'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const SignOutButton = () => {
  return (
    <button className="px-3 py-4 text-5xl bg-amber-500 rounded" onClick={() => signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/sign-in`
    })}>
        Sign Out
    </button>
  )
}

export default SignOutButton