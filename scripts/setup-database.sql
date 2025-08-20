-- Create database tables for Sweet Burst business management

-- Users table for authentication
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  event_type VARCHAR(100),
  event_date DATE,
  guest_count VARCHAR(50),
  budget VARCHAR(50),
  services TEXT[],
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_phone VARCHAR(50),
  event_type VARCHAR(100) NOT NULL,
  event_date DATE NOT NULL,
  event_time TIME,
  venue VARCHAR(255),
  guest_count INTEGER,
  budget DECIMAL(10,2),
  services TEXT[],
  description TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  total_amount DECIMAL(10,2) DEFAULT 0,
  paid_amount DECIMAL(10,2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Invoices table
CREATE TABLE IF NOT EXISTS invoices (
  id SERIAL PRIMARY KEY,
  event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
  invoice_number VARCHAR(50) UNIQUE NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  due_date DATE NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  sent_at TIMESTAMP,
  paid_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payments table
CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
  invoice_id INTEGER REFERENCES invoices(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  payment_method VARCHAR(50),
  payment_date DATE NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Event milestones table
CREATE TABLE IF NOT EXISTS event_milestones (
  id SERIAL PRIMARY KEY,
  event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  due_date DATE,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO users (email, name, role) VALUES 
('admin@sweetburst.com', 'Sweet Burst Admin', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Insert sample contact messages
INSERT INTO contact_messages (name, email, event_type, event_date, message, status) VALUES 
('Sarah Johnson', 'sarah@example.com', 'wedding', '2024-06-15', 'Looking for wedding planning services for 150 guests', 'new'),
('Mike Chen', 'mike@example.com', 'birthday', '2024-04-20', 'Need custom cake for 40th birthday party', 'contacted'),
('Emily Davis', 'emily@example.com', 'corporate', '2024-05-10', 'Corporate event planning for product launch', 'quoted')
ON CONFLICT DO NOTHING;

-- Insert sample events
INSERT INTO events (client_name, client_email, event_type, event_date, guest_count, budget, services, status, total_amount, paid_amount) VALUES 
('Sarah Johnson', 'sarah@example.com', 'wedding', '2024-06-15', 150, 15000.00, ARRAY['Event Planning', 'Custom Cakes', 'Venue Curation'], 'confirmed', 15000.00, 5000.00),
('Mike Chen', 'mike@example.com', 'birthday', '2024-04-20', 40, 2500.00, ARRAY['Custom Cakes', 'Design & Styling'], 'in_progress', 2500.00, 2500.00),
('Emily Davis', 'emily@example.com', 'corporate', '2024-05-10', 100, 8000.00, ARRAY['Event Planning', 'Venue Curation'], 'pending', 8000.00, 0.00)
ON CONFLICT DO NOTHING;
