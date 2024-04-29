import LogoutForm from '@/components/login/LogoutForm'
import SearchMain from '@/components/search/SearchMain'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/sign-in")
  }

  return (
    <main>
      <h1>Profile Page</h1>
      <p>Welcome, {session.user.name}</p>
      <LogoutForm />
      <SearchMain searchArray={null} />
    </main>

  )
}

export default ProfilePage