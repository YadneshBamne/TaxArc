import { useEffect, useState } from 'react'
import { client } from '../sanity/client'

/**
 * Custom hook to fetch data from Sanity using GROQ queries
 * @param {string} query - GROQ query string
 * @param {object} params - Query parameters
 * @returns {object} - { data, loading, error }
 */
export const useSanityData = (query, params = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!query) {
      setLoading(false)
      return
    }

    let isMounted = true
    let timeoutId

    const fetchData = async () => {
      try {
        if (!isMounted) return
        
        setLoading(true)
        
        // Set timeout to stop loading after 10 seconds
        timeoutId = setTimeout(() => {
          if (isMounted) {
            setLoading(false)
            setData(null)
          }
        }, 10000)
        
        const result = await client.fetch(query, params)
        
        clearTimeout(timeoutId)
        
        if (isMounted) {
          setData(result)
          setError(null)
          setLoading(false)
        }
      } catch (err) {
        clearTimeout(timeoutId)
        if (!isMounted) return
        console.error('Error:', err.message)
        setError(err.message)
        setData(null)
        setLoading(false)
      }
    }

    fetchData()

    return () => {
      isMounted = false
      clearTimeout(timeoutId)
    }
  }, [query])

  return { data, loading, error }
}

export default useSanityData
