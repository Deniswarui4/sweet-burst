import { sql } from "@/lib/db"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EventManagement } from "@/components/dashboard/event-management"
import { InvoiceManagement } from "@/components/dashboard/invoice-management"
import { PaymentManagement } from "@/components/dashboard/payment-management"
import { MilestoneManagement } from "@/components/dashboard/milestone-management"
import { notFound } from "next/navigation"

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const eventId = Number.parseInt(params.id)

  try {
    const [eventResult, invoices, payments, milestones] = await Promise.all([
      sql`SELECT * FROM events WHERE id = ${eventId}`,
      sql`SELECT * FROM invoices WHERE event_id = ${eventId} ORDER BY created_at DESC`,
      sql`SELECT * FROM payments WHERE event_id = ${eventId} ORDER BY created_at DESC`,
      sql`SELECT * FROM event_milestones WHERE event_id = ${eventId} ORDER BY due_date ASC`,
    ])

    if (eventResult.length === 0) {
      notFound()
    }

    const event = eventResult[0]

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{event.client_name}</h1>
              <p className="text-gray-600">
                {event.event_type} • {new Date(event.event_date).toLocaleDateString()}
              </p>
            </div>
            <Badge
              variant={
                event.status === "confirmed" ? "default" : event.status === "in_progress" ? "secondary" : "outline"
              }
            >
              {event.status}
            </Badge>
          </div>

          {/* Event Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Event Management */}
            <div className="lg:col-span-2 space-y-8">
              <EventManagement event={event} />
              <MilestoneManagement eventId={eventId} milestones={milestones} />
            </div>

            {/* Right Column - Financial Management */}
            <div className="space-y-8">
              <InvoiceManagement eventId={eventId} invoices={invoices} />
              <PaymentManagement
                eventId={eventId}
                payments={payments}
                totalAmount={Number(event.total_amount)}
                paidAmount={Number(event.paid_amount)}
              />
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Event detail error:", error)
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-red-600">Error Loading Event</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Unable to load event details. Please try again.</p>
          </CardContent>
        </Card>
      </div>
    )
  }
}
