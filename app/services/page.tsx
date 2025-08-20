"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Cake, MapPin, Palette, Check, ArrowRight, Clock, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import ServiceInquiryModal from "@/components/service-inquiry-modal"
import { useState } from "react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event Planning",
      subtitle: "Complete Event Coordination",
      description:
        "From concept to celebration, we handle every aspect of your event planning with meticulous attention to detail.",
      image: "/placeholder.svg?height=400&width=600&text=Event+Planning",
      features: [
        "Initial consultation and vision development",
        "Detailed timeline and project management",
        "Vendor sourcing and coordination",
        "Budget planning and management",
        "Day-of coordination and execution",
        "Post-event follow-up and cleanup",
      ],
      pricing: "Starting at $2,500",
      duration: "3-6 months planning",
    },
    {
      icon: <Cake className="w-8 h-8" />,
      title: "Custom Cake Design",
      subtitle: "Artisanal Cake Creations",
      description:
        "Our master cake designers create stunning, delicious centerpieces that perfectly complement your celebration.",
      image: "/placeholder.svg?height=400&width=600&text=Custom+Cakes",
      features: [
        "Custom design consultation",
        "Flavor tasting sessions",
        "3D cake design mockups",
        "Premium ingredient sourcing",
        "Dietary accommodation options",
        "Professional delivery and setup",
      ],
      pricing: "Starting at $150",
      duration: "2-4 weeks creation",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Venue Curation",
      subtitle: "Perfect Location Sourcing",
      description: "We find and secure the ideal venue that matches your vision, style, and budget requirements.",
      image: "/placeholder.svg?height=400&width=600&text=Venue+Curation",
      features: [
        "Venue research and scouting",
        "Site visits and evaluations",
        "Contract negotiation",
        "Layout and capacity planning",
        "Accessibility assessments",
        "Backup venue recommendations",
      ],
      pricing: "Starting at $500",
      duration: "2-8 weeks sourcing",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Styling",
      subtitle: "Complete Aesthetic Direction",
      description: "Our design team creates cohesive, beautiful environments that bring your aesthetic vision to life.",
      image: "/placeholder.svg?height=400&width=600&text=Design+Styling",
      features: [
        "Color palette development",
        "Floral design and arrangements",
        "Lighting design and setup",
        "Table settings and linens",
        "Signage and stationery design",
        "Photography backdrop creation",
      ],
      pricing: "Starting at $800",
      duration: "4-8 weeks design",
    },
  ]

  const [selectedService, setSelectedService] = useState<string | null>(null)

  const processSteps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We start with a detailed consultation to understand your vision, preferences, and requirements.",
    },
    {
      step: "02",
      title: "Proposal & Planning",
      description: "We create a comprehensive proposal with timeline, budget, and detailed service breakdown.",
    },
    {
      step: "03",
      title: "Design & Coordination",
      description: "Our team handles all vendor coordination, design development, and logistical planning.",
    },
    {
      step: "04",
      title: "Execution & Celebration",
      description: "We manage every detail on your special day, ensuring flawless execution of your vision.",
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
              Our Services
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Comprehensive
              <span className="block text-transparent bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text">
                Event Solutions
              </span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we offer a full suite of services to make your event
              extraordinary. Each service is tailored to your unique vision and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">{service.icon}</div>
                      <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">{service.title}</h2>
                        <p className="text-neutral-600 font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-lg text-neutral-600 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-neutral-900">What's Included:</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-amber-500" />
                      <span className="text-neutral-600 font-medium">{service.pricing}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-neutral-500" />
                      <span className="text-neutral-600">{service.duration}</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-full font-medium group"
                    onClick={() => setSelectedService(service.title)}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="border-neutral-200 text-neutral-700 bg-neutral-50 px-4 py-2 rounded-full font-medium mb-6"
            >
              Our Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">How We Work Together</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our proven process ensures every detail is perfect and every moment is magical
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative p-6 border-0 bg-white shadow-lg rounded-2xl text-center">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-neutral-200 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">{step.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-neutral-300" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge
              variant="outline"
              className="border-neutral-200 text-neutral-700 bg-white px-4 py-2 rounded-full font-medium"
            >
              Ready to Begin?
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">Let's Plan Your Perfect Event</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Every great celebration starts with a conversation. Let's discuss your vision and create something
              extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-full font-medium"
                asChild
              >
                <Link href="/contact">Start Planning</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-8 py-4 rounded-full font-medium bg-transparent"
                asChild
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <ServiceInquiryModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        serviceName={selectedService || ""}
      />
    </div>
  )
}
