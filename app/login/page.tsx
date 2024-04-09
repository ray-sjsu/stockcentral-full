import React from 'react'
import { redirect } from 'next/navigation';
import { getSession, login, logout, validSession } from '@/utils/authentication';
import Nav from '@/components/navbar/nav';

const LoginPage = async () => {
  const session = await getSession();
  return (
    <main className="flex flex-col items-center mt-10">
      <h1 className="font-bold text-4xl my-10">StockCentral Login</h1>
      <section>
        <form
          action={async (formData) => {
            "use server";
            await login(formData);
            if (await validSession()) {
              redirect("/profile");
            }
          }}
        >
          <input type="email" placeholder="Email" className="text-blue-400" />
          <input type="password" placeholder="Password" className="text-blue-400" />
          <br />
          <button type="submit">Login</button>
        </form>
        <form
          action={async () => {
            "use server";
            await logout();
            redirect("/login");
          }}
        >
          <button type="submit">Logout</button>
        </form>
        <pre>{JSON.stringify(session, null, 2)}</pre>

        <div className="mt-10">
          <h1>Are you logged in?</h1>
          <p className="text-red-500">
            {
              await validSession() ? 'Yes' : 'No'
            }
          </p>
        </div>
      </section>
      <Nav />
    </main>
  )
}

export default LoginPage