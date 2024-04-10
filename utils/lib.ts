import { SessionOptions } from "iron-session";

export interface SessionData {
    userId?: number;
    username?: string;
    password?: string;
    currentStock?: string;
    searchHistory?: string[];
    favoriteList?: string[];
    isLoggedIn: boolean;
}

export const defaultSession:SessionData = {
    isLoggedIn: false
}

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!,
    cookieName: "stockcentral-session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }
}