"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitDetailedContactForm } from "@/app/actions"
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

export default function DetailedContactForm() {
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    const result = await submitDetailedContactForm(formData)
    setResult(result)

    if (result.success) {
      // Reset form on success
      const form = document.getElementById("detailed-contact-form") as HTMLFormElement
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

        <form id="detailed-contact-form" action={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-neutral-700">
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                className="border-neutral-200 rounded-xl"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium text-neutral-700">
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                className="border-neutral-200 rounded-xl"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-neutral-700">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                className="border-neutral-200 rounded-xl"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-neutral-700">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="border-neutral-200 rounded-xl"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="eventType" className="text-sm font-medium text-neutral-700">
                Event Type *
              </Label>
              <Select name="eventType" required>
                <SelectTrigger className="border-neutral-200 rounded-xl">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="birthday">Birthday Party</SelectItem>
                  <SelectItem value="baby-shower">Baby Shower</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="anniversary">Anniversary</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="eventDate" className="text-sm font-medium text-neutral-700">
                Preferred Date
              </Label>
              <Input id="eventDate" name="eventDate" type="date" className="border-neutral-200 rounded-xl" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="guestCount" className="text-sm font-medium text-neutral-700">
                Guest Count
              </Label>
              <Select name="guestCount">
                <SelectTrigger className="border-neutral-200 rounded-xl">
                  <SelectValue placeholder="Number of guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-25">1-25 guests</SelectItem>
                  <SelectItem value="26-50">26-50 guests</SelectItem>
                  <SelectItem value="51-100">51-100 guests</SelectItem>
                  <SelectItem value="101-200">101-200 guests</SelectItem>
                  <SelectItem value="200+">200+ guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-sm font-medium text-neutral-700">
                Budget Range
              </Label>
              <Select name="budget">
                <SelectTrigger className="border-neutral-200 rounded-xl">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-5k">Under $5,000</SelectItem>
                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                  <SelectItem value="20k-50k">$20,000 - $50,000</SelectItem>
                  <SelectItem value="50k+">$50,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="services" className="text-sm font-medium text-neutral-700">
              Services Needed
            </Label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="eventPlanning" value="true" className="rounded border-neutral-300" />
                <span className="text-sm text-neutral-700">Event Planning</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="customCakes" value="true" className="rounded border-neutral-300" />
                <span className="text-sm text-neutral-700">Custom Cakes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="venueSourcing" value="true" className="rounded border-neutral-300" />
                <span className="text-sm text-neutral-700">Venue Sourcing</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="designStyling" value="true" className="rounded border-neutral-300" />
                <span className="text-sm text-neutral-700">Design & Styling</span>
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-neutral-700">
              Tell us about your vision *
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Describe your dream event, style preferences, special requirements, or any questions you have..."
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
