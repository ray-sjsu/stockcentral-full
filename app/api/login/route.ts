import { LoginFormSchema } from "@/lib/types";
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const body: unknown = await request.json();

    const zodResult = LoginFormSchema.safeParse(body);
    let zodErrors = {}
    if (!zodResult.success) {
        zodResult.error.issues.forEach(issue => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
        })
    }

    return NextResponse.json(
        Object.keys(zodErrors).length > 0 
            ? { errors: zodErrors }
            : { success: true }
    );
}