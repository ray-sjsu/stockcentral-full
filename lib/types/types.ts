import { z } from 'zod';

export const SignInFormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});
export type TSignInFormSchema = z.infer<typeof SignInFormSchema>

export const SignUpFormSchema = z
  .object({
    username: z.string().min(1, "Username is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have than 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });
export type TSignUpFormSchema = z.infer<typeof SignUpFormSchema>

// Define schema for server-side input validation (/api/user)
export const UserCreationSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});





export type stockAPIOptions = "all"

export type stockAPINews = {
  category: string,
  datetime: number,
  headline: string,
  id: number,
  image: string,
  source: string,
  summary: string,
  url: string
}
export type stockAPINewsArray = any[]
export type stockAPIInfo = {
  '52_week_high': number,
  '52_week_low': number,
  'annual_dividend_yield': string,
  'beta': number,
  'liquidity_ratio_quarterly': number,
  'price_to_earning_annual': number,
}
export type stockAPIChartEntry = {
  [key: string]: number
}
export type stockAPIChartList = {
  "income": stockAPIChartEntry | {},
  "revenue": stockAPIChartEntry | {},
}
export type stockChartInfo = {
  labels: string[],
  data: number[],
}
export type stockChartInfoArray = stockChartInfo[]

export type stockAPISearchEntry = {
  description: string,
  displaySymbol: string,
  symbol: string,
  type: string,
  image: string,
}

export type stockAPISearchArray = stockAPISearchEntry[] | null