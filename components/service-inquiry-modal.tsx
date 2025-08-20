"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"
import { submitQuickInquiry } from "@/app/actions"
import { useState } from "react"
import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 rounded-xl font-medium"
    >
      {pending ? "Sending..." : "Send Inquiry"}
    </Button>
  )
}

interface ServiceInquiryModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName: string
}

export default function ServiceInquiryModal({ isOpen, onClose, serviceName }: ServiceInquiryModalProps) {
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    // Add the service name to the form data
    formData.set("service", serviceName)

    const result = await submitQuickInquiry(formData)
    setResult(result)

    if (result.success) {
      // Reset form on success
      const form = document.getElementById("service-inquiry-form") as HTMLFormElement
      form?.reset()

      // Close modal after 2 seconds
      setTimeout(() => {
        onClose()
        setResult(null)
      }, 2000)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-2xl rounded-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-neutral-900">Inquire About {serviceName}</h3>
            <Button variant="ghost" size="sm" onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-full">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {result && (
            <div
              className={`mb-6 p-4 rounded-xl ${
                result.success
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {result.message}
            </div>
          )}

          <form id="service-inquiry-form" action={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-neutral-700">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Your full name"
                className="border-neutral-200 rounded-xl"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-neutral-700">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="border-neutral-200 rounded-xl"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-neutral-700">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder={`Tell us about your ${serviceName.toLowerCase()} needs...`}
                className="border-neutral-200 rounded-xl min-h-[100px] resize-none"
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
