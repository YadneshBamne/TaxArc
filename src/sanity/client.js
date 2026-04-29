import { createClient } from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const token = import.meta.env.VITE_SANITY_TOKEN

export const client = createClient({
  projectId: projectId || '',
  dataset: dataset || 'production',
  apiVersion: '2024-04-28',
  useCdn: true,
  token: token,
})

export default client
