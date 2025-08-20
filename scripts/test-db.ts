import { neon } from '@neondatabase/serverless';

async function testConnection() {
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL is not set');
    process.exit(1);
  }

  console.log('🔌 Testing database connection...');
  
  const sql = neon(process.env.DATABASE_URL);
  
  try {
    const result = await sql`SELECT 1 as test`;
    console.log('✅ Database connection successful!', result);
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    if (error.message.includes('self signed certificate')) {
      console.log('\n💡 Try adding `?sslmode=no-verify` to your DATABASE_URL');
    }
  }
}

testConnection();
