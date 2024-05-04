import { db } from "@/lib/db";
import { UserCreationSchema } from "@/lib/types/types";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    const zodParse = await UserCreationSchema.safeParseAsync(body);
    if (zodParse.error) {
      throw new Error("Serverside userSchema validation failed for api/user");
    }
    const { email, username, password } = zodParse.data;

    // Verify user with username or email doesn't exist in db
    const existingUser = await db.user.findFirst({
      where: {
        OR: [
          {
            username: username
          },
          {
            email: email
          }
        ]
      }
    });
    if (existingUser?.username == username) {
      return NextResponse.json(
        {
          user: null,
          message: `User with this username "${username}" already exists`,
        },
        { status: 409 }
      );
    }
    if (existingUser?.email == email) {
      return NextResponse.json(
        {
          user: null,
          message: `User with this email "${email}" already exists`,
        },
        { status: 409 }
      );
    }

    // Valid user, create a new user
    const hashSaltRounds = 20;
    const hashedPassword = await hash(password, hashSaltRounds);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Something went wrong! ${error}` },
      { status: 500 }
    );
  }
}
