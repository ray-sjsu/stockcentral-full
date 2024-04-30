import SignInForm from '@/components/forms/SignInForm'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const SignInPage = async () => {
  const session = await getServerSession(authOptions)

  if (session?.user) {
    redirect("/profile")
  }

  return (
    <section className='w-full'>
      <SignInForm />
    </section>
  )
}

export default SignInPage