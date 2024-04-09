import Nav from '@/components/navbar/nav'
import { getSession, logout, validSession } from '@/utils/authentication'
import { redirect } from 'next/navigation';
import React from 'react'

const SettingsPage = async () => {
  const session = await getSession()
  return (
    <main>
      <h1>Profile Page</h1>
      <div className="mt-10">
        <h1>Are you logged in?</h1>
        <p className="text-red-500">
          {
            await validSession() ? 'Yes' : 'No'
          }
        </p>
      </div>
      <form
          action={async () => {
            "use server";
            await logout();
            redirect("/login");
          }}
        >
          <button type="submit">Logout</button>
        </form>
      <h1>Session Info</h1>
      <pre>{JSON.stringify(await validSession(), null, 2)}</pre>
      <Nav />
    </main>

  )
}

export default SettingsPage