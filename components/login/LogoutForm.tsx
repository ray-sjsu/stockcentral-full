import { logoutSession } from '@/lib/actions'
import React from 'react'

const LogoutForm = () => {
  return (
    <form action={logoutSession}>
        <button>logout</button>
    </form>
  )
}

export default LogoutForm