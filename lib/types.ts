import { z } from 'zod';

export const LoginFormSchema = z.object({
    username: z.string()
      .min(2, "Username needs a min length of 2 characters")
      .max(10, "Username needs a max length of 10 characters"),
    password: z.string()
      .min(4, "Password needs a min length of 4 characters"),
  })
export type TLoginFormSchema = z.infer<typeof LoginFormSchema>


export type stockChartInfo = {
  "label": string[],
  "data": number[],
}

export type stockAPIInfo = "currentPrice" | "info" | "charts" | "news"