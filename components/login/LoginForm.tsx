'use client';

import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { TLoginFormSchema, LoginFormSchema } from '@/lib/types';

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
      alert("server side validation failed!")
      reset();
      return
    }
    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.username) {
        setError("username", {
          type: "server",
          message: errors.username,
        })
      }
      else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password
        })
      }
      else {
        alert("Client and server input does not match!")
      }
      reset();
      return;
    }
    if (response.ok && responseData.success) {
      alert("success")
    }
    if (response.ok && !responseData.success) {
      alert("failure, credentials not valid")
    }


  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input {...register('username') } type="text" placeholder="username" className="text-red-500 m-2 p-1" />
        <input {...register('password') } type="password" placeholder="password" className="text-red-500 m-2 p-1" />
        <button type="submit" disabled={isSubmitting} className="rounded px-1 py-2 bg-red-500 m-2">Login</button>
        {
          errors.username?.message ? <h1>Username error</h1> : ""
        }
        {
          errors.password?.message ? <h1>Password error</h1> : ""
        }
    </form>
  )
}

export default LoginForm