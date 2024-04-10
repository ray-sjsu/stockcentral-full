import { PrismaClient } from "@prisma/client";
import { TLoginFormSchema } from "./lib/types";
const prisma = new PrismaClient()

async function main() {
    await prisma.userInfo.create({
        data: {
            username: "test",
            password: "test",
        }
    })
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

export async function verifyLogin(LoginData : TLoginFormSchema) {
    const users = prisma.userInfo.findUnique({
        where: {
            username: LoginData.username,
            password: LoginData.password,
        }
    })
    if (await users) {
        return true
    } else {
        return false
    }
}