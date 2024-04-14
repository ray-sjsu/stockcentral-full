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

export const retrieveStockInfo = async (stockSymbol : string | null, stockInfo : stockAPIOptions) => {
    if (!stockSymbol) {
        return null
    }
    const formData = new FormData()
    formData.append('stock_symbol', stockSymbol)
    console.log(formData)
    console.log(`stockAPIOptions: ${stockInfo}`)

    try {
      const response = await fetch('http://localhost:5000/stocks', {
        method: 'POST',
        body: formData
      });
      const data = await response.json()
      if (!data) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    if (stockInfo === "currentPrice") {
        if (data[0] === 0) {
            return -1
        }
        return data[0]
    }
    if (stockInfo === "info") {
        if (Object.keys(data[1]).length === 0) {
            return null
        }
        return data[1]
    }
    if (stockInfo === "charts") {
        return data[2]
    }
    if (stockInfo === "news") {
        if (data[3].length === 0) {
            return null
        }
        return data[3]
    }
    if (stockInfo === "all") {
        return data
    }
    return null

    } catch (error) {
      console.error('Error fetching data:', error);
      console.log(`error: ${error}`)
      return null;
    }
  };


// database actions

import { PrismaClient } from "@prisma/client";
import { TLoginFormSchema, stockAPIOptions } from "./types";
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

