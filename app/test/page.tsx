import { createTestUser } from '@/database'
import React from 'react'

const TestPage = () => {
  return (
    <main className="flex flex-col justify-center items-center">
        <h1>TEST PAGE</h1>
        <button onSubmit={createTestUser}>Create Test User</button>
    </main>
  )
}

export default TestPage