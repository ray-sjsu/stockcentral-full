import LogoutForm from '@/components/login/LogoutForm'
import SearchMain from '@/components/search/SearchMain'
import { getSession } from '@/lib/actions'
import { redirect } from 'next/navigation'
import React from 'react'

const ProfilePage = async () => {
  const session = await getSession()

  if (!session.isLoggedIn) {
    redirect("/login")
  }

  return (
    <main>
      <h1>Profile Page</h1>
      <p>Weclome, {session.username}</p>
      <LogoutForm />
      <SearchMain />
    </main>

  )
}

export default ProfilePage