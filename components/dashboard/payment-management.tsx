"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { recordPayment } from "@/app/dashboard/actions"
import { Plus, DollarSign } from "lucide-react"
import type { Payment } from "@/lib/db"
import { useState } from "react"
import { useFormStatus } from "react-dom"

function RecordPaymentButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Recording..." : "Record Payment"}
    </Button>
  )
}

interface PaymentManagementProps {
  eventId: number
  payments: Payment[]
  totalAmount: number
  paidAmount: number
}

export function PaymentManagement({ eventId, payments, totalAmount, paidAmount }: PaymentManagementProps) {
  const [showPaymentForm, setShowPaymentForm] = useState(false)

  const remainingAmount = totalAmount - paidAmount
  const paymentProgress = totalAmount > 0 ? (paidAmount / totalAmount) * 100 : 0

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Payments</CardTitle>
        <Button size="sm" onClick={() => setShowPaymentForm(!showPaymentForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Record Payment
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Payment Summary */}
        <div className="p-4 bg-gray-50 rounded-lg space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Amount:</span>
            <span className="font-medium">${totalAmount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Paid Amount:</span>
            <span className="font-medium text-green-600">${paidAmount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Remaining:</span>
            <span className="font-medium text-red-600">${remainingAmount.toLocaleString()}</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(paymentProgress, 100)}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 text-center">{paymentProgress.toFixed(1)}% paid</p>
        </div>

        {/* Record Payment Form */}
        {showPaymentForm && (
          <form action={recordPayment} className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <input type="hidden" name="eventId" value={eventId} />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  max={remainingAmount}
                  required
                />
              </div>
              <div>
                <Label htmlFor="paymentDate">Payment Date</Label>
                <Input
                  id="paymentDate"
                  name="paymentDate"
                  type="date"
                  defaultValue={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Select name="paymentMethod" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="check">Check</SelectItem>
                  <SelectItem value="credit_card">Credit Card</SelectItem>
                  <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea id="notes" name="notes" placeholder="Payment notes..." rows={2} />
            </div>

            <div className="flex space-x-2">
              <RecordPaymentButton />
              <Button type="button" variant="outline" onClick={() => setShowPaymentForm(false)}>
                Cancel
              </Button>
            </div>
          </form>
        )}

        {/* Payments History */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Payment History</h4>
          {payments.length > 0 ? (
            payments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <DollarSign className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">${payment.amount.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">
                      {payment.payment_method} • {new Date(payment.payment_date).toLocaleDateString()}
                    </p>
                    {payment.notes && <p className="text-xs text-gray-400">{payment.notes}</p>}
                  </div>
                </div>
                <Badge variant="default">Paid</Badge>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm text-center py-4">No payments recorded yet</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
