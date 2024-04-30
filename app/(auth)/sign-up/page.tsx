import SignUpForm from '@/components/forms/SignUpForm'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import BigLogoSection from '@/components/BigLogoSection'

const SignUpPage = async () => {
  const session = await getServerSession(authOptions)

  if (session?.user) {
    redirect("/profile")
  }

  return (
    <section className='w-full'>
      <div className="w-full m-[10%]"></div>
      <BigLogoSection />
      <h1 className="text-center mb-5 text-3xl">Sign Up</h1>
      <SignUpForm />
    </section>
  )
}

export default SignUpPage