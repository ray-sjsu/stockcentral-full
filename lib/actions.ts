"use server";

import { sessionOptions, SessionData, defaultSession } from "@/lib/lib"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"

export const getSession = async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions)

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn
    }

    return session;
}
export const redirectSession = (url : string) => {
    redirect(url)
}
export const logoutSession = async () => {
    const session = await getSession()
    session.destroy()
    redirect("/login")
}


// database actions

import { PrismaClient } from "@prisma/client";
import { TLoginFormSchema } from "./types";
import { redirect } from "next/navigation";
const prisma = new PrismaClient()

export async function retrieveLogin(LoginData : TLoginFormSchema) {
    const users = prisma.userInfo.findUnique({
        where: {
            username: LoginData.username,
            password: LoginData.password,
        }
    })
    if (await users) {
        return users
    } else {
        return null
    }
}


export async function createTestUser() {
    await prisma.userInfo.create({
        data: {
            userId: 1,
            username: "test",
            password: "test",
        }
    })
    await prisma.userPreference.create({
        data: {
            userAccount: 1,
            selectedStock: "APPL",
            searchHistory: 'APPL, MSFT, AMZN',
            favoriteList: 'APPL, AMZN',
        }
    })
}