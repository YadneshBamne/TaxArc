import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-full min-h-screen bg-white flex items-center justify-center pt-20'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold mb-4 text-gray-900'>404</h1>
        <p className='text-2xl mb-8 text-gray-600'>Page Not Found</p>
        <Link to="/" className='text-blue-600 hover:text-blue-500 underline font-semibold'>
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
