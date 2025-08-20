"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitContactForm } from "@/app/actions"
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
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export default function ContactForm() {
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData)
    setResult(result)

    if (result.success) {
      // Reset form on success
      const form = document.getElementById("contact-form") as HTMLFormElement
      form?.reset()
    }
  }

  return (
    <Card className="p-8 border-0 bg-white shadow-xl rounded-2xl">
      <CardContent className="p-0">
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

        <form id="contact-form" action={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
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
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="eventType" className="text-sm font-medium text-neutral-700">
                Event Type
              </Label>
              <Select name="eventType">
                <SelectTrigger className="border-neutral-200 rounded-xl">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="birthday">Birthday</SelectItem>
                  <SelectItem value="baby-shower">Baby Shower</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="eventDate" className="text-sm font-medium text-neutral-700">
                Event Date
              </Label>
              <Input id="eventDate" name="eventDate" type="date" className="border-neutral-200 rounded-xl" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-neutral-700">
              Tell us about your vision *
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Describe your dream event..."
              className="border-neutral-200 rounded-xl min-h-[120px] resize-none"
              required
            />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  )
}
