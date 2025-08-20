"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { updateEventStatus } from "@/app/dashboard/actions"
import { Calendar, MapPin, Users, DollarSign, Mail, Phone } from "lucide-react"
import type { Event } from "@/lib/db"
import { useState } from "react"

interface EventManagementProps {
  event: Event
}

export function EventManagement({ event }: EventManagementProps) {
  const [updating, setUpdating] = useState(false)

  const handleStatusUpdate = async (status: string) => {
    setUpdating(true)
    await updateEventStatus(event.id, status)
    setUpdating(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Client Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Client Information</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{event.client_email}</span>
              </div>
              {event.client_phone && (
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{event.client_phone}</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Event Status</h4>
            <Select defaultValue={event.status} onValueChange={handleStatusUpdate} disabled={updating}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Calendar className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Date</p>
              <p className="text-sm font-medium">{new Date(event.event_date).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Users className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Guests</p>
              <p className="text-sm font-medium">{event.guest_count || "TBD"}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <DollarSign className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Budget</p>
              <p className="text-sm font-medium">${event.budget?.toLocaleString() || "TBD"}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <MapPin className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Venue</p>
              <p className="text-sm font-medium">{event.venue || "TBD"}</p>
            </div>
          </div>
        </div>

        {/* Services */}
        {event.services && event.services.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Services</h4>
            <div className="flex flex-wrap gap-2">
              {event.services.map((service, index) => (
                <Badge key={index} variant="outline">
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        {event.description && (
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Description</h4>
            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{event.description}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
