// Database table interfaces
export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone?: string;
  event_type?: string;
  event_date?: string;
  guest_count?: string;
  budget?: string;
  services?: string[];
  message: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: number;
  client_name: string;
  client_email: string;
  client_phone?: string;
  event_type: string;
  event_date: string;
  event_time?: string;
  venue?: string;
  guest_count?: number;
  budget?: number;
  services?: string[];
  description?: string;
  status: string;
  total_amount: number;
  paid_amount: number;
  created_at: string;
  updated_at: string;
}

export interface Invoice {
  id: number;
  event_id: number;
  invoice_number: string;
  amount: number;
  due_date: string;
  status: string;
  sent_at?: string;
  paid_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: number;
  event_id: number;
  invoice_id?: number;
  amount: number;
  payment_method?: string;
  payment_date: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

// Type for joined payment and event data
export type PaymentWithEvent = Payment & {
  client_name: string;
  event_type: string;
  event_date: string;
};
