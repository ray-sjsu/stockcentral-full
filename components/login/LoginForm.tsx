'use client';

import { login } from '@/utils/actions'
import React from 'react'
import { useFormState } from 'react-dom'
import { getSession } from '@/utils/actions'
import { redirect } from 'next/navigation';

const LoginForm = async () => {
  const [state, formAction] = useFormState<any, FormData>(login, undefined)
    
  return (
    <form action={formAction} className="flex flex-col">
        <input type="text" name="username" required placeholder="username" className="text-red-500 m-2 p-1" />
        <input type="password" name="password" required placeholder="password" className="text-red-500 m-2 p-1" />
        <button className="rounded px-1 py-2 bg-red-500 m-2">Login</button>
        {state?.error && <p>{state.error}</p>}
    </form>
  )
}

export default LoginForm