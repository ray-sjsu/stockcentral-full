import SignUpForm from '@/components/forms/SignUpForm'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const SignUpPage = async () => {
  const session = await getServerSession(authOptions)

  if (session?.user) {
    redirect("/profile")
  }

  return (
    <section className='w-full'>
      <SignUpForm />
    </section>
  )
}

export default SignUpPage