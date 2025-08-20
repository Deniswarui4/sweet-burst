import { neon, NeonQueryFunction } from "@neondatabase/serverless"

export * from "./db-types";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set")
}

// Create a singleton instance of the database client
let sql: NeonQueryFunction<false, false>;

try {
  sql = neon(process.env.DATABASE_URL);
  console.log('✅ Database connection established');
} catch (error) {
  console.error('❌ Failed to create database client:', error);
  throw error;
}

// Add error handling to all queries and proper typing
export async function query<T = any>(strings: TemplateStringsArray, ...values: any[]): Promise<T> {
  try {
    const result = await sql(strings, ...values);
    // Convert the result to the expected type
    return result as unknown as T;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

export interface ContactMessage {
  id: number
  name: string
  email: string
  phone?: string
  event_type?: string
  event_date?: string
  guest_count?: string
  budget?: string
  services?: string[]
  message: string
  status: string
  created_at: string
  updated_at: string
}

export interface Event {
  id: number
  client_name: string
  client_email: string
  client_phone?: string
  event_type: string
  event_date: string
  event_time?: string
  venue?: string
  guest_count?: number
  budget?: number
  services?: string[]
  description?: string
  status: string
  total_amount: number
  paid_amount: number
  created_at: string
  updated_at: string
}

export interface Invoice {
  id: number
  event_id: number
  invoice_number: string
  amount: number
  due_date: string
  status: string
  sent_at?: string
  paid_at?: string
  created_at: string
  updated_at: string
}

export interface Payment {
  id: number
  event_id: number
  invoice_id?: number
  amount: number
  payment_method?: string
  payment_date: string
  notes?: string
  created_at: string
}

export interface EventMilestone {
  id: number
  event_id: number
  title: string
  description?: string
  due_date?: string
  completed: boolean
  completed_at?: string
  created_at: string
}
