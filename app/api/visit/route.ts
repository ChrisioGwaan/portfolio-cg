export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { getPool } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      ip_raw, ua, referer, method, path,
      country, region, city, vercel_pop
    } = body || {}

    if (!ip_raw || !path) return NextResponse.json({ ok: false }, { status: 400 })

    const pool = getPool()
    await pool.query(
      `INSERT INTO cgweb.web_visit
         (ip_raw, ua, referer, method, path, country, region, city, vercel_pop)
       VALUES ($1::inet, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [ip_raw, ua, referer, method, path, country, region, city, vercel_pop]
    )

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
