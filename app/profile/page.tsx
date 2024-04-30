import BigLogoSection from '@/components/BigLogoSection'
import SignOutButton from '@/components/forms/SignOutButton'
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
    <main className="w-full">
      <div className="w-full m-[10%]"></div>
      <BigLogoSection />
      <section className="w-full flex flex-col justify-center items-center">
        <h1>Profile Page</h1>
        <p>Welcome, {session.user.username}</p>
        <SignOutButton />
      </section>
    </main>
  )
}

export default ProfilePage