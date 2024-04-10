"use server";
import { getIronSession } from "iron-session"
import { sessionOptions, SessionData, defaultSession } from "./lib"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import { TLoginFormSchema } from "@/lib/types";


// test user
let username = "test"
let password = "password"
let searchHistory = ["AMZN"]
let favoriteList = ["EBAY"]
const redirectPageAfterSuccessfulLogin = "/profile"
const redirectPageAfterSuccessfulLogout = "/login"

export const getSession = async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn
    }

    if (session.isLoggedIn) {
        // check user in database and update history
        session.searchHistory = searchHistory
        session.favoriteList = favoriteList
    }

    return session;
}
export const login = async (LoginFormData: TLoginFormSchema) => {
    const session = await getSession()

    const formUsername = LoginFormData.username
    const formPassword = LoginFormData.password

    // check user in the DB
    // const user = await db.getUser({username, password})

    if (formUsername !== username || formPassword !== password) {
    }
    // userID from database
    session.userId = 1
    session.username = formUsername
    session.isLoggedIn = true

    await session.save()
}
export const logout = async () => {
    const session = await getSession()
    session.destroy()
    redirect(redirectPageAfterSuccessfulLogout)
}
export const updateFavoriteList = async () => {
    const session = await getSession()
    

    await session.save()
}