import { NextResponse } from 'next/server';

export async function GET() {
  const isDatabaseConfigured = !!process.env.DATABASE_URL;
  
  if (isDatabaseConfigured) {
    try {
      const { db } = await import('@/db');
      const { sql } = await import('drizzle-orm');
      await db.execute(sql`SELECT 1`);
      return NextResponse.json({ status: 'ok', database: 'connected' });
    } catch (error) {
      return NextResponse.json({ status: 'ok', database: 'error', error: String(error) });
    }
  }
  
  return NextResponse.json({ status: 'ok', database: 'not configured (demo mode)' });
}
