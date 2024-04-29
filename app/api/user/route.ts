import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { z } from "zod";

// Define schema for input validation
const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  });

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { username, email, password } = body;

        //  check if email already exists
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        })
        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: `User with this email "${email}" already exists`}, { status: 409 })
        }

        //  check if username already exists
        const existingUserByUsername = await db.user.findUnique({
            where: { username: username }
        })
        if (existingUserByUsername) {
            return NextResponse.json({ user: null, message: `User with this username "${username}" already exists`}, { status: 409 })
        }

        const hashSalt = 10
        const hashedPassword = await hash(password, hashSalt)
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            }
        });

        const { password: newUserPassword, ...rest } = newUser

        return NextResponse.json({user: rest, message: "User created successfully"}, { status: 201 })
    } catch(error) {
        return NextResponse.json({message: `Something went wrong! ${error}`}, { status: 500 })
    }
}