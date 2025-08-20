import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    databaseUrl: process.env.DATABASE_URL ? '✅ DATABASE_URL is set' : '❌ DATABASE_URL is not set',
    nodeEnv: process.env.NODE_ENV || 'NODE_ENV is not set',
  });
}
