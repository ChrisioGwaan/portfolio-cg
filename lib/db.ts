import { Pool } from 'pg'

let pool: Pool
export function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString:
        process.env.DATABASE_URL || undefined,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT ? Number(process.env.PGPORT) : 5432,
      max: 3,
      idleTimeoutMillis: 10_000,
    })
  }
  return pool
}
