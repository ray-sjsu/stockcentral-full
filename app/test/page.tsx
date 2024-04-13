'use client';

import { retrieveStockInfo } from '@/lib/actions';
import React, { useState } from 'react'

const TestPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiData, setApiData] = useState(null);

  const fetchSpecificData = async () => {
    setIsSubmitting(true)
    const data = await retrieveStockInfo("AMZN", "info")
    setApiData(data)
    setIsSubmitting(false)
  }


  return (
    <div>
      <h1>Test Page</h1>
      <button onClick={fetchSpecificData} className="p-2 bg-red-500 rounded-md">Fetch Data</button>
      <div>
        <p>API DATA:</p>
        <p>{`API data: ${apiData}`}</p>
        <p>{`Is submitting: ${isSubmitting}`}</p>
      </div>
    </div>
  )
}

export default TestPage