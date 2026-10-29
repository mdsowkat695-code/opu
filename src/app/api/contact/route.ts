import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const { name, email, message, service } = await request.json()
  const { data, error } = await supabase
    .from('leads')
    .insert([{ name, email, message, service }])

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true, data })
}