'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const SignOutButton = () => {
  return (
    <button className="p-2 text-4xl bg-slate-500 rounded" onClick={() => signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/sign-in`
    })}>
        Sign Out
    </button>
  )
}

export default SignOutButton