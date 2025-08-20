"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { updateMessageStatus } from "@/app/dashboard/actions"
import type { ContactMessage } from "@/lib/db"
import { useState } from "react"

interface MessagesTableProps {
  messages: ContactMessage[]
}

export function MessagesTable({ messages }: MessagesTableProps) {
  const [updating, setUpdating] = useState<number | null>(null)

  const handleStatusUpdate = async (messageId: number, status: string) => {
    setUpdating(messageId)
    await updateMessageStatus(messageId, status)
    setUpdating(null)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "destructive"
      case "contacted":
        return "secondary"
      case "quoted":
        return "default"
      case "converted":
        return "default"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-4">
      {messages.length > 0 ? (
        messages.map((message) => (
          <div key={message.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium">{message.name}</h4>
                <p className="text-sm text-gray-600">{message.email}</p>
                {message.event_type && (
                  <p className="text-xs text-gray-500">
                    {message.event_type} •{" "}
                    {message.event_date ? new Date(message.event_date).toLocaleDateString() : "No date"}
                  </p>
                )}
              </div>
              <Badge variant={getStatusColor(message.status)}>{message.status}</Badge>
            </div>

            <p className="text-sm text-gray-700 line-clamp-2">{message.message}</p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{new Date(message.created_at).toLocaleDateString()}</span>

              <div className="flex space-x-2">
                {message.status === "new" && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleStatusUpdate(message.id, "contacted")}
                    disabled={updating === message.id}
                  >
                    Mark Contacted
                  </Button>
                )}
                {message.status === "contacted" && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleStatusUpdate(message.id, "quoted")}
                    disabled={updating === message.id}
                  >
                    Mark Quoted
                  </Button>
                )}
                {message.status === "quoted" && (
                  <Button
                    size="sm"
                    onClick={() => handleStatusUpdate(message.id, "converted")}
                    disabled={updating === message.id}
                  >
                    Convert to Event
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center py-8">No messages yet</p>
      )}
    </div>
  )
}
