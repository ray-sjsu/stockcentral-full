import { z } from 'zod';

export const LoginFormSchema = z.object({
    username: z.string()
      .min(2, "Username needs a min length of 2 characters")
      .max(10, "Username needs a max length of 10 characters"),
    password: z.string()
      .min(4, "Password needs a min length of 4 characters"),
  })
export type TLoginFormSchema = z.infer<typeof LoginFormSchema>

export type stockAPIOptions = "currentPrice" | "info" | "charts" | "news" | "all"


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
  imageUrl: string,
}

export type stockAPISearchArray = stockAPISearchEntry[] | null