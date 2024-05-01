import SignUpForm from '@/components/forms/SignUpForm'
import React from 'react'
import BigLogoSection from '@/components/BigLogoSection'

const SignUpPage = () => {
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