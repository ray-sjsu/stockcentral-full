import { db } from "@/lib/db";
import { UserCreationSchema } from "@/lib/types/types";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    const zodParse = UserCreationSchema.safeParse(body);
    if (zodParse.success) {
      const { email, username, password } = zodParse.data;

      //  check if email already exists
      const existingUserByEmail = await db.user.findUnique({
        where: { email: email },
      });
      if (existingUserByEmail) {
        return NextResponse.json(
          {
            user: null,
            message: `User with this email "${email}" already exists`,
          },
          { status: 409 }
        );
      }

      //  check if username already exists
      const existingUserByUsername = await db.user.findUnique({
        where: { username: username },
      });
      if (existingUserByUsername) {
        return NextResponse.json(
          {
            user: null,
            message: `User with this username "${username}" already exists`,
          },
          { status: 409 }
        );
      }

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
    } else {
      throw new Error("userSchema validation failed for user route");
    }
  } catch (error) {
    return NextResponse.json(
      { message: `Something went wrong! ${error}` },
      { status: 500 }
    );
  }
}
