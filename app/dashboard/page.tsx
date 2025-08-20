"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { query } from "@/lib/db";
import type { ContactMessage, Event, Invoice, Payment, PaymentWithEvent } from "@/lib/db-types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, MessageSquare, TrendingUp, Clock, AlertCircle } from "lucide-react";
import Link from "next/link";

// Helper function to safely execute database queries
async function safeQuery<T>(queryPromise: Promise<T>): Promise<T> {
  try {
    return await queryPromise;
  } catch (error) {
    console.error('Database query error:', error);
    return [] as unknown as T;
  }
}

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<{
    messages: ContactMessage[];
    events: Event[];
    invoices: Invoice[];
    payments: Payment[];
    upcomingEvents: Event[];
    recentPayments: PaymentWithEvent[];
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, you would check for a valid session or token here
    const checkAuth = async () => {
      try {
        // Simulate an auth check
        await new Promise(resolve => setTimeout(resolve, 500));
        // For now, we'll just set isAuthenticated to true
        // In a real app, you would verify a token or session here
        setIsAuthenticated(true);
        loadDashboardData();
      } catch (error) {
        console.error('Auth check failed:', error);
        setError('Authentication failed. Please log in again.');
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const loadDashboardData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const [
        messages,
        events,
        invoices,
        payments,
        upcomingEvents,
        recentPayments
      ] = await Promise.all([
        safeQuery<ContactMessage[]>(
          query`SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 5`
        ),
        safeQuery<Event[]>(
          query`SELECT * FROM events ORDER BY created_at DESC`
        ),
        safeQuery<Invoice[]>(
          query`SELECT * FROM invoices ORDER BY created_at DESC`
        ),
        safeQuery<Payment[]>(
          query`SELECT * FROM payments ORDER BY created_at DESC LIMIT 5`
        ),
        safeQuery<Event[]>(
          query`SELECT * FROM events WHERE event_date >= CURRENT_DATE ORDER BY event_date ASC LIMIT 5`
        ),
        safeQuery<PaymentWithEvent[]>(
          query`
            SELECT p.*, e.client_name, e.event_type, e.event_date 
            FROM payments p
            JOIN events e ON p.event_id = e.id
            ORDER BY p.payment_date DESC LIMIT 5
          `
        )
      ]);

      setData({
        messages,
        events,
        invoices,
        payments,
        upcomingEvents,
        recentPayments
      });
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
      setError('Failed to load dashboard data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500 mx-auto mb-4"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg mb-4">You need to be logged in to view this page</p>
          <Button onClick={() => router.push('/login')}>
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg mb-4">Failed to load dashboard data</p>
          <Button onClick={loadDashboardData}>
            Retry
          </Button>
        </div>
      </div>
    );
  }

  const { messages, events, invoices, payments, upcomingEvents, recentPayments } = data;

  // Calculate statistics
  const totalEvents = events.length;
  const totalRevenue = payments.reduce((sum, payment) => sum + (payment.amount || 0), 0);
  const pendingInvoices = invoices.filter(invoice => invoice.status === 'pending').length;
  const unreadMessages = messages.filter(message => !message.read).length;

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalEvents}</div>
            <p className="text-xs text-muted-foreground">
              {upcomingEvents.length} upcoming events
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {payments.length} payments received
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Invoices</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingInvoices}</div>
            <p className="text-xs text-muted-foreground">
              {invoices.length} total invoices
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{unreadMessages}</div>
            <p className="text-xs text-muted-foreground">
              {messages.length} total messages
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPayments.length > 0 ? (
                recentPayments.map((payment) => (
                  <div key={payment.id} className="flex items-center">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {payment.client_name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {payment.event_type} - ${payment.amount}
                      </p>
                    </div>
                    <div className="ml-auto text-sm text-muted-foreground">
                      {new Date(payment.payment_date).toLocaleDateString()}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No recent activity</p>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {event.client_name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {event.event_type}
                      </p>
                    </div>
                    <div className="ml-auto text-sm text-muted-foreground">
                      {new Date(event.event_date).toLocaleDateString()}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No upcoming events</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
