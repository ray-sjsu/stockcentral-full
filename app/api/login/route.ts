import { verifyLogin } from "@/database";
import { LoginFormSchema, TLoginFormSchema } from "@/lib/types";
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
        // set success to false or true if successful login

        const LoginFormData : TLoginFormSchema = {
            username: zodResult.data.username,
            password: zodResult.data.password,
        }

        if (await verifyLogin(LoginFormData)) {
            successStatus = true
        }
    }

    return NextResponse.json(
        Object.keys(zodErrors).length > 0 
            ? { errors: zodErrors }
            : { success: successStatus }
    );
}