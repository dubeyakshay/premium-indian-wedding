import { NextRequest, NextResponse } from 'next/server';

// Check if database is configured
const isDatabaseConfigured = !!process.env.DATABASE_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, guests, attending, message, dietaryPreference } = body;

    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    if (!isDatabaseConfigured) {
      // Demo mode: just log and return success
      console.log('📩 RSVP received (demo mode - no database):', { name, email, guests, attending });
      return NextResponse.json({ success: true, demo: true }, { status: 201 });
    }

    // Database mode
    const { db } = await import('@/db');
    const { rsvps } = await import('@/db/schema');

    await db.insert(rsvps).values({
      name: name.trim(),
      email: email?.trim() || null,
      phone: phone?.trim() || null,
      guests: typeof guests === 'number' ? guests : 1,
      attending: attending !== false,
      message: message?.trim() || null,
      dietaryPreference: dietaryPreference?.trim() || null,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('RSVP error:', error);
    return NextResponse.json({ error: 'Failed to save RSVP' }, { status: 500 });
  }
}

export async function GET() {
  try {
    if (!isDatabaseConfigured) {
      // Demo mode: return sample data
      return NextResponse.json([
        { id: 1, name: 'Demo Guest', email: 'demo@example.com', guests: 2, attending: true, createdAt: new Date().toISOString() }
      ]);
    }

    const { db } = await import('@/db');
    const { rsvps } = await import('@/db/schema');

    const allRsvps = await db.select().from(rsvps).orderBy(rsvps.createdAt);
    return NextResponse.json(allRsvps);
  } catch (error) {
    console.error('Fetch RSVP error:', error);
    return NextResponse.json({ error: 'Failed to fetch RSVPs' }, { status: 500 });
  }
}
