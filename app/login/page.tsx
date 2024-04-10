import LoginForm from '@/components/login/LoginForm'
import LogoutForm from '@/components/login/LogoutForm'
import { getSession } from '@/utils/actions'
import { redirect } from 'next/navigation'
import React from 'react'

const LoginPage = async () => {
  const session = await getSession()

  console.log('current session:')
  console.log(session)

  if (session.isLoggedIn) {
    redirect("/profile")
  }

  return (
    <main className="flex flex-col items-center justify-center mt-10">
      <h1 className="font-bold text-4xl my-10">StockCentral Login</h1>
      {
        session.isLoggedIn ? <h1>You are logged in</h1> : <h1>Login please</h1>
      }
      <LoginForm />
      {
        session.isLoggedIn ? <LogoutForm /> : <h1> You are logged off </h1>
      }
    </main>
  )
}

export default LoginPage