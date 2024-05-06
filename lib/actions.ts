"use server";

// api calls

import { stockAPIOptions } from "./types/types";

const FLASK_API = process.env.FLASK_API_URL

export const retrieveStockInfo = async (stockSymbol : string | null, stockInfo? : stockAPIOptions) => {
    if (!stockSymbol) {
        return null
    }
    const formData = new FormData()
    formData.append('stock_symbol', stockSymbol)

    try {
      const response = await fetch(`${FLASK_API}/stocks`, {
        method: 'POST',
        body: formData
      });
      const data = await response.json()
      if (!data) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    if (stockInfo === "all" && data[0] !== 0) {
        return data
    }
    return null

    } catch (error) {
      console.error('Error retrieveStockInfo:', error);
      console.log(`error: ${error}`)
      return null;
    }
};

export const retrieveStockSearchList = async (stockSymbol: string) => {
    if (!stockSymbol || stockSymbol === "") {
        return null
    }
    const formData = new FormData()
    formData.append('stock_symbol', stockSymbol)

    try {
        const response = await fetch(`${FLASK_API}/search`, {
          method: 'POST',
          body: formData
        });
        const data = await response.json()
        if (!data) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return data
  
      } catch (error) {
        console.error('Error retrieveStockSearchList:', error);
        console.log(`error: ${error}`)
        return null;
      }
}