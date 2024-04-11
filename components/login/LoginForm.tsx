'use client';

import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { TLoginFormSchema, LoginFormSchema } from '@/lib/types';
import { redirectSession } from '@/lib/actions';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TLoginFormSchema>({
    resolver: zodResolver(LoginFormSchema)
  })

  const onSubmit = async (LoginFormData : TLoginFormSchema) => {
    const response = await fetch('/api/login', {
      method: "POST",
      body: JSON.stringify(LoginFormData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const responseData = await response.json();
    console.log(responseData)
    if (!response.ok) {
      alert('Server Validation Failed!')
    }
    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.username) {
        setError("username", {
          type: "server",
          message: errors.username,
        })
        alert('Username Validation Failed!')
      }
      else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password
        })
        alert('Password Validation Failed!')
      }
      else {
        alert('Client & Server Validation Failed!')
      }
      reset();
      return;
    }
    // Passed validation, now check credentials
    if (response.ok && responseData.success) {
      alert('Successful Login!')
      redirectSession("/profile")
    }
    if (response.ok && !responseData.success) {
      alert('Invalid Credentials!')
      reset();
      return;
    }


  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input {...register('username') } type="text" placeholder="username" className="text-red-500 m-2 p-1" />
        <input {...register('password') } type="password" placeholder="password" className="text-red-500 m-2 p-1" />
        <button type="submit" disabled={isSubmitting} className="rounded px-1 py-2 bg-red-500 m-2">Login</button>
        <p>{errors.username?.message}</p>
        <p>{errors.password?.message}</p>
    </form>
  )
}

export default LoginForm