"use server"

export async function submitContactForm(formData: FormData) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const eventType = formData.get("eventType") as string
  const eventDate = formData.get("eventDate") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  // Here you would typically save to database or send email
  console.log("Contact form submission:", {
    name,
    email,
    eventType,
    eventDate,
    message,
    timestamp: new Date().toISOString(),
  })

  return {
    success: true,
    message: `Thank you ${name}! We've received your message and will get back to you within 24 hours.`,
  }
}

export async function submitDetailedContactForm(formData: FormData) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const eventType = formData.get("eventType") as string
  const eventDate = formData.get("eventDate") as string
  const guestCount = formData.get("guestCount") as string
  const budget = formData.get("budget") as string
  const message = formData.get("message") as string

  // Get selected services
  const services = []
  if (formData.get("eventPlanning")) services.push("Event Planning")
  if (formData.get("customCakes")) services.push("Custom Cakes")
  if (formData.get("venueSourcing")) services.push("Venue Sourcing")
  if (formData.get("designStyling")) services.push("Design & Styling")

  // Basic validation
  if (!firstName || !lastName || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  // Here you would typically save to database or send email
  console.log("Detailed contact form submission:", {
    firstName,
    lastName,
    email,
    phone,
    eventType,
    eventDate,
    guestCount,
    budget,
    services,
    message,
    timestamp: new Date().toISOString(),
  })

  return {
    success: true,
    message: `Thank you ${firstName}! We've received your detailed inquiry and will get back to you within 24 hours with a personalized response.`,
  }
}

export async function submitQuickInquiry(formData: FormData) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 800))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !service) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  // Here you would typically save to database or send email
  console.log("Quick inquiry submission:", {
    name,
    email,
    service,
    message,
    timestamp: new Date().toISOString(),
  })

  return {
    success: true,
    message: `Thank you ${name}! We've received your inquiry about ${service} and will contact you soon.`,
  }
}
