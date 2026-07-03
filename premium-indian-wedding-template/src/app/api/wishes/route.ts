import { NextRequest, NextResponse } from 'next/server';

// Check if database is configured
const isDatabaseConfigured = !!process.env.DATABASE_URL;

// In-memory storage for demo mode
const demoWishes: Array<{ id: number; name: string; message: string; createdAt: string }> = [];
let demoIdCounter = 1;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message } = body;

    if (!name || !message || typeof name !== 'string' || typeof message !== 'string') {
      return NextResponse.json({ error: 'Name and message are required' }, { status: 400 });
    }

    if (!isDatabaseConfigured) {
      // Demo mode: store in memory
      const wish = {
        id: demoIdCounter++,
        name: name.trim(),
        message: message.trim(),
        createdAt: new Date().toISOString(),
      };
      demoWishes.unshift(wish);
      console.log('💌 Wish received (demo mode):', wish);
      return NextResponse.json({ success: true, demo: true }, { status: 201 });
    }

    // Database mode
    const { db } = await import('@/db');
    const { wishes } = await import('@/db/schema');

    await db.insert(wishes).values({
      name: name.trim(),
      message: message.trim(),
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Wishes error:', error);
    return NextResponse.json({ error: 'Failed to save wish' }, { status: 500 });
  }
}

export async function GET() {
  try {
    if (!isDatabaseConfigured) {
      // Demo mode: return in-memory wishes
      return NextResponse.json(demoWishes);
    }

    const { db } = await import('@/db');
    const { wishes } = await import('@/db/schema');
    const { desc } = await import('drizzle-orm');

    const allWishes = await db.select().from(wishes).orderBy(desc(wishes.createdAt)).limit(50);
    return NextResponse.json(allWishes);
  } catch (error) {
    console.error('Fetch wishes error:', error);
    return NextResponse.json({ error: 'Failed to fetch wishes' }, { status: 500 });
  }
}
