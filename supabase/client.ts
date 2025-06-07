import { createBrowserClient } from "@supabase/ssr"
const url = process.env.SUPABASE_URL
const key = process.env.SUPABASE_API_KEY

if (!url || !key) {
  throw new Error('Missing Supabase env vars')
}

export const createClient = () => {
  console.log("Supabase created")
  return createBrowserClient(url, key)
}
