import LoginForm from '@/components/login/LoginForm'
import LogoutForm from '@/components/login/LogoutForm'
import { redirect } from 'next/navigation'
import React from 'react'

const LoginPage = async () => {

  return (
    <main className="flex flex-col items-center justify-center mt-10">
      <h1 className="font-bold text-4xl my-10">StockCentral Login</h1>
      {
        false ? <h1>You are logged in</h1> : <h1>Login please</h1>
      }
      <LoginForm />
      <hr className="solid border border-solid w-60"/>
      {
        false ? <LogoutForm /> : <h1> Session: You are logged off </h1>
      }
    </main>
  )
}

export default LoginPage