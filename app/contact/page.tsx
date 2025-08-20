"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MessageCircle, MapPin, Clock, Instagram, Facebook } from "lucide-react"
import Navigation from "@/components/navigation"
import DetailedContactForm from "@/components/detailed-contact-form"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      description: "Call us for immediate assistance",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Send us a detailed message",
      contact: "hello@sweetburst.com",
      action: "Send Email",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Quick chat and instant responses",
      contact: "+1 (555) 123-4567",
      action: "Chat Now",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      description: "Schedule an in-person consultation",
      contact: "123 Event Street, City, State 12345",
      action: "Get Directions",
    },
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "By Appointment Only" },
  ]

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking 3-6 months in advance for weddings and large events, 4-8 weeks for smaller celebrations.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment plans to make our services accessible. We'll discuss options during your consultation.",
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer:
        "We specialize in creating delicious cakes and menu options for various dietary needs including gluten-free, vegan, and allergen-free options.",
    },
    {
      question: "What's included in your event planning service?",
      answer:
        "Our full-service planning includes venue sourcing, vendor coordination, design and styling, timeline management, and day-of coordination.",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navigation />
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="border-rose-200 text-rose-700 bg-rose-50 px-4 py-2 rounded-full font-medium"
            >
              Get In Touch
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Let's Plan Your
              <span className="block text-transparent bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text">
                Perfect Event
              </span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Ready to bring your vision to life? We're here to help you create an unforgettable celebration. Reach out
              to us and let's start planning something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="border-neutral-200 text-neutral-700 bg-neutral-50 px-4 py-2 rounded-full font-medium mb-6"
            >
              Contact Options
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">How to Reach Us</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose the method that works best for you. We're here to help in whatever way is most convenient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group p-6 border-0 bg-white hover:shadow-xl transition-all duration-300 rounded-2xl text-center"
              >
                <CardContent className="p-0">
                  <div className="p-3 bg-neutral-100 rounded-xl group-hover:bg-neutral-900 group-hover:text-white transition-colors w-fit mx-auto mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{method.title}</h3>
                  <p className="text-neutral-600 text-sm mb-3">{method.description}</p>
                  <p className="text-neutral-700 font-medium text-sm mb-4">{method.contact}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 rounded-full bg-transparent"
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <Badge
                  variant="outline"
                  className="border-neutral-200 text-neutral-700 bg-white px-4 py-2 rounded-full font-medium mb-6"
                >
                  Send Message
                </Badge>
                <h2 className="text-4xl font-bold text-neutral-900 mb-4">Tell Us About Your Vision</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Fill out the form below with details about your event, and we'll get back to you within 24 hours with
                  a personalized response.
                </p>
              </div>

              <DetailedContactForm />
            </div>

            {/* Contact Info & Business Hours */}
            <div className="space-y-8">
              <div>
                <Badge
                  variant="outline"
                  className="border-neutral-200 text-neutral-700 bg-white px-4 py-2 rounded-full font-medium mb-6"
                >
                  Business Hours
                </Badge>
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">When We're Available</h3>
                <Card className="p-6 border-0 bg-white shadow-lg rounded-2xl">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-2 bg-neutral-100 rounded-lg">
                        <Clock className="w-5 h-5 text-neutral-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-neutral-900">Office Hours</h4>
                    </div>
                    <div className="space-y-3">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-neutral-700 font-medium">{schedule.day}</span>
                          <span className="text-neutral-600">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-neutral-50 rounded-xl">
                      <p className="text-sm text-neutral-600">
                        <strong>Emergency Contact:</strong> For urgent matters on weekends or holidays, please call our
                        emergency line at +1 (555) 987-6543
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Follow Our Journey</h3>
                <Card className="p-6 border-0 bg-white shadow-lg rounded-2xl">
                  <CardContent className="p-0">
                    <p className="text-neutral-600 mb-6">
                      Stay updated with our latest events, behind-the-scenes content, and inspiration for your own
                      celebrations.
                    </p>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-neutral-200 text-neutral-600 hover:bg-neutral-50 rounded-full bg-transparent flex-1"
                      >
                        <Instagram className="w-4 h-4 mr-2" />
                        Instagram
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-neutral-200 text-neutral-600 hover:bg-neutral-50 rounded-full bg-transparent flex-1"
                      >
                        <Facebook className="w-4 h-4 mr-2" />
                        Facebook
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Location</h3>
                <Card className="p-6 border-0 bg-white shadow-lg rounded-2xl">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-neutral-100 rounded-xl mb-4 flex items-center justify-center">
                      <p className="text-neutral-500">Interactive Map Coming Soon</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-neutral-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-neutral-900">Sweet Burst Studio</p>
                          <p className="text-neutral-600 text-sm">123 Event Street</p>
                          <p className="text-neutral-600 text-sm">City, State 12345</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-neutral-300 text-neutral-700 hover:bg-neutral-50 rounded-full bg-transparent"
                      >
                        Get Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="border-neutral-200 text-neutral-700 bg-neutral-50 px-4 py-2 rounded-full font-medium mb-6"
            >
              FAQ
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-0 bg-white shadow-lg rounded-2xl">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">{faq.question}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-4">Still have questions?</p>
            <Button
              variant="outline"
              className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-6 py-2 rounded-full bg-transparent"
            >
              View All FAQs
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
