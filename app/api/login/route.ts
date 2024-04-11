"use server";

import { getSession, retrieveLogin } from "@/lib/actions";
import { LoginFormSchema, TLoginFormSchema } from "@/lib/types";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    let successStatus = false
    const body: unknown = await request.json();

    const zodResult = LoginFormSchema.safeParse(body);
    let zodErrors = {}
    if (!zodResult.success) {
        zodResult.error.issues.forEach(issue => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
        })
    } else {
        // check DB for existing username and password
        const LoginFormData : TLoginFormSchema = {
            username: zodResult.data.username,
            password: zodResult.data.password,
        }
        const dbResult = await retrieveLogin(LoginFormData)
        if (dbResult !== null) {
            successStatus = true

            // save session
            const session = await getSession()

            session.userId = dbResult.userId
            session.username = dbResult.username
            session.isLoggedIn = true

            await session.save()
        }
        console.log(`dbResult: ${dbResult?.username}`)

    }

    return NextResponse.json(
        Object.keys(zodErrors).length > 0 
            ? { errors: zodErrors }
            : { success: successStatus }
    );
}