import { DollarSign } from "lucide-react"

interface RecentActivityProps {
  payments: any[]
}

export function RecentActivity({ payments }: RecentActivityProps) {
  return (
    <div className="space-y-4">
      {payments.length > 0 ? (
        payments.map((payment) => (
          <div key={payment.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="p-2 bg-green-100 rounded-full">
              <DollarSign className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">Payment received</p>
              <p className="text-xs text-gray-600">
                ${payment.amount.toLocaleString()} from {payment.client_name}
              </p>
              <p className="text-xs text-gray-500">{new Date(payment.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-sm">No recent activity</p>
      )}
    </div>
  )
}
