'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const SignOutButton = () => {
  return (
    <button onClick={() => signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/sign-in`
    })}>
        Sign Out
    </button>
  )
}

export default SignOutButton