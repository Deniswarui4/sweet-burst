"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createInvoice } from "@/app/dashboard/actions"
import { Plus, Download } from "lucide-react"
import type { Invoice } from "@/lib/db"
import { useState } from "react"
import { useFormStatus } from "react-dom"

function CreateInvoiceButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Creating..." : "Create & Send Invoice"}
    </Button>
  )
}

interface InvoiceManagementProps {
  eventId: number
  invoices: Invoice[]
}

export function InvoiceManagement({ eventId, invoices }: InvoiceManagementProps) {
  const [showCreateForm, setShowCreateForm] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "outline"
      case "paid":
        return "default"
      case "overdue":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Invoices</CardTitle>
        <Button size="sm" onClick={() => setShowCreateForm(!showCreateForm)}>
          <Plus className="h-4 w-4 mr-2" />
          New Invoice
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Create Invoice Form */}
        {showCreateForm && (
          <form action={createInvoice} className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <input type="hidden" name="eventId" value={eventId} />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" name="amount" type="number" step="0.01" placeholder="0.00" required />
              </div>
              <div>
                <Label htmlFor="dueDate">Due Date</Label>
                <Input id="dueDate" name="dueDate" type="date" required />
              </div>
            </div>

            <div className="flex space-x-2">
              <CreateInvoiceButton />
              <Button type="button" variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancel
              </Button>
            </div>
          </form>
        )}

        {/* Invoices List */}
        <div className="space-y-3">
          {invoices.length > 0 ? (
            invoices.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">{invoice.invoice_number}</p>
                  <p className="text-xs text-gray-500">Due: {new Date(invoice.due_date).toLocaleDateString()}</p>
                  <p className="text-sm font-medium">${invoice.amount.toLocaleString()}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={getStatusColor(invoice.status)}>{invoice.status}</Badge>
                  <Button size="sm" variant="outline">
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm text-center py-4">No invoices created yet</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
