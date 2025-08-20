"use server"

import { sql } from "@/lib/db"
import { sendInvoiceEmail, sendPaymentConfirmation } from "@/lib/resend"
import { revalidatePath } from "next/cache"

export async function updateMessageStatus(messageId: number, status: string) {
  try {
    await sql`
      UPDATE contact_messages 
      SET status = ${status}, updated_at = CURRENT_TIMESTAMP 
      WHERE id = ${messageId}
    `
    revalidatePath("/dashboard")
    return { success: true }
  } catch (error) {
    console.error("Error updating message status:", error)
    return { success: false, error: "Failed to update message status" }
  }
}

export async function createEvent(formData: FormData) {
  try {
    const clientName = formData.get("clientName") as string
    const clientEmail = formData.get("clientEmail") as string
    const clientPhone = formData.get("clientPhone") as string
    const eventType = formData.get("eventType") as string
    const eventDate = formData.get("eventDate") as string
    const eventTime = formData.get("eventTime") as string
    const venue = formData.get("venue") as string
    const guestCount = Number.parseInt(formData.get("guestCount") as string) || 0
    const budget = Number.parseFloat(formData.get("budget") as string) || 0
    const description = formData.get("description") as string

    // Get selected services
    const services = []
    if (formData.get("eventPlanning")) services.push("Event Planning")
    if (formData.get("customCakes")) services.push("Custom Cakes")
    if (formData.get("venueCuration")) services.push("Venue Curation")
    if (formData.get("designStyling")) services.push("Design & Styling")

    const result = await sql`
      INSERT INTO events (
        client_name, client_email, client_phone, event_type, event_date, event_time,
        venue, guest_count, budget, services, description, total_amount
      ) VALUES (
        ${clientName}, ${clientEmail}, ${clientPhone}, ${eventType}, ${eventDate}, ${eventTime},
        ${venue}, ${guestCount}, ${budget}, ${services}, ${description}, ${budget}
      ) RETURNING id
    `

    revalidatePath("/dashboard")
    return { success: true, eventId: result[0].id }
  } catch (error) {
    console.error("Error creating event:", error)
    return { success: false, error: "Failed to create event" }
  }
}

export async function updateEventStatus(eventId: number, status: string) {
  try {
    await sql`
      UPDATE events 
      SET status = ${status}, updated_at = CURRENT_TIMESTAMP 
      WHERE id = ${eventId}
    `
    revalidatePath("/dashboard")
    return { success: true }
  } catch (error) {
    console.error("Error updating event status:", error)
    return { success: false, error: "Failed to update event status" }
  }
}

export async function createInvoice(formData: FormData) {
  try {
    const eventId = Number.parseInt(formData.get("eventId") as string)
    const amount = Number.parseFloat(formData.get("amount") as string)
    const dueDate = formData.get("dueDate") as string

    // Generate invoice number
    const invoiceNumber = `INV-${Date.now()}`

    const result = await sql`
      INSERT INTO invoices (event_id, invoice_number, amount, due_date)
      VALUES (${eventId}, ${invoiceNumber}, ${amount}, ${dueDate})
      RETURNING id, invoice_number
    `

    // Get event details for email
    const eventDetails = await sql`
      SELECT client_name, client_email, event_type 
      FROM events 
      WHERE id = ${eventId}
    `

    if (eventDetails.length > 0) {
      const event = eventDetails[0]
      await sendInvoiceEmail(event.client_email, invoiceNumber, amount, dueDate, event.client_name, event.event_type)

      // Update sent_at timestamp
      await sql`
        UPDATE invoices 
        SET sent_at = CURRENT_TIMESTAMP 
        WHERE id = ${result[0].id}
      `
    }

    revalidatePath("/dashboard")
    return { success: true, invoiceId: result[0].id, invoiceNumber: result[0].invoice_number }
  } catch (error) {
    console.error("Error creating invoice:", error)
    return { success: false, error: "Failed to create invoice" }
  }
}

export async function recordPayment(formData: FormData) {
  try {
    const eventId = Number.parseInt(formData.get("eventId") as string)
    const invoiceId = formData.get("invoiceId") ? Number.parseInt(formData.get("invoiceId") as string) : null
    const amount = Number.parseFloat(formData.get("amount") as string)
    const paymentMethod = formData.get("paymentMethod") as string
    const paymentDate = formData.get("paymentDate") as string
    const notes = formData.get("notes") as string

    // Record payment
    await sql`
      INSERT INTO payments (event_id, invoice_id, amount, payment_method, payment_date, notes)
      VALUES (${eventId}, ${invoiceId}, ${amount}, ${paymentMethod}, ${paymentDate}, ${notes})
    `

    // Update event paid amount
    await sql`
      UPDATE events 
      SET paid_amount = paid_amount + ${amount}, updated_at = CURRENT_TIMESTAMP 
      WHERE id = ${eventId}
    `

    // If invoice provided, check if fully paid
    if (invoiceId) {
      const invoice = await sql`
        SELECT amount FROM invoices WHERE id = ${invoiceId}
      `

      if (invoice.length > 0 && invoice[0].amount <= amount) {
        await sql`
          UPDATE invoices 
          SET status = 'paid', paid_at = CURRENT_TIMESTAMP 
          WHERE id = ${invoiceId}
        `
      }
    }

    // Get event details for confirmation email
    const eventDetails = await sql`
      SELECT client_name, client_email, event_type 
      FROM events 
      WHERE id = ${eventId}
    `

    if (eventDetails.length > 0) {
      const event = eventDetails[0]
      await sendPaymentConfirmation(event.client_email, event.client_name, amount, event.event_type, paymentMethod)
    }

    revalidatePath("/dashboard")
    return { success: true }
  } catch (error) {
    console.error("Error recording payment:", error)
    return { success: false, error: "Failed to record payment" }
  }
}

export async function addMilestone(formData: FormData) {
  try {
    const eventId = Number.parseInt(formData.get("eventId") as string)
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const dueDate = formData.get("dueDate") as string

    await sql`
      INSERT INTO event_milestones (event_id, title, description, due_date)
      VALUES (${eventId}, ${title}, ${description}, ${dueDate})
    `

    revalidatePath("/dashboard")
    return { success: true }
  } catch (error) {
    console.error("Error adding milestone:", error)
    return { success: false, error: "Failed to add milestone" }
  }
}

export async function toggleMilestone(milestoneId: number, completed: boolean) {
  try {
    await sql`
      UPDATE event_milestones 
      SET completed = ${completed}, 
          completed_at = ${completed ? "CURRENT_TIMESTAMP" : null},
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ${milestoneId}
    `

    revalidatePath("/dashboard")
    return { success: true }
  } catch (error) {
    console.error("Error updating milestone:", error)
    return { success: false, error: "Failed to update milestone" }
  }
}
