"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Event } from "@/lib/db"
import Link from "next/link"

interface EventsTableProps {
  events: Event[]
}

export function EventsTable({ events }: EventsTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "outline"
      case "confirmed":
        return "default"
      case "in_progress":
        return "secondary"
      case "completed":
        return "default"
      case "cancelled":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getPaymentStatus = (totalAmount: number, paidAmount: number) => {
    if (paidAmount === 0) return { status: "unpaid", color: "destructive" }
    if (paidAmount >= totalAmount) return { status: "paid", color: "default" }
    return { status: "partial", color: "secondary" }
  }

  return (
    <div className="space-y-4">
      {events.length > 0 ? (
        events.map((event) => {
          const paymentStatus = getPaymentStatus(event.total_amount, event.paid_amount)

          return (
            <div key={event.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">{event.client_name}</h4>
                  <p className="text-sm text-gray-600">{event.event_type}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(event.event_date).toLocaleDateString()} • {event.guest_count} guests
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Badge variant={getStatusColor(event.status)}>{event.status}</Badge>
                  <Badge variant={paymentStatus.color}>{paymentStatus.status}</Badge>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-gray-600">Payment: </span>
                  <span className="font-medium">
                    ${event.paid_amount.toLocaleString()} / ${event.total_amount.toLocaleString()}
                  </span>
                </div>

                <Button size="sm" variant="outline" asChild>
                  <Link href={`/dashboard/events/${event.id}`}>Manage</Link>
                </Button>
              </div>
            </div>
          )
        })
      ) : (
        <p className="text-gray-500 text-center py-8">No events yet</p>
      )}
    </div>
  )
}
