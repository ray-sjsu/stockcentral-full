import { logout } from '@/utils/actions'
import React from 'react'

const LogoutForm = () => {
  return (
    <form action={logout}>
        <button>logout</button>
    </form>
  )
}

export default LogoutForm