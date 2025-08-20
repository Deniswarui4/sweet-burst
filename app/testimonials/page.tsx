"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Bride",
      event: "Garden Wedding",
      image: "/placeholder.svg?height=80&width=80&text=SC",
      rating: 5,
      quote:
        "Sweet Burst transformed our vision into reality beyond our wildest dreams. Every detail was absolutely perfect, from the stunning floral arrangements to the exquisite cake. Our guests are still talking about how magical our wedding was. The team's attention to detail and professionalism made our special day stress-free and unforgettable.",
      date: "June 2024",
      featured: true,
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Corporate Event Manager",
      event: "Product Launch",
      image: "/placeholder.svg?height=80&width=80&text=MJ",
      rating: 5,
      quote:
        "Professional, creative, and flawlessly executed. Our product launch event was a huge success thanks to Sweet Burst's incredible team. They understood our brand vision and created an experience that perfectly represented our company values. The attention to detail and seamless coordination impressed all our stakeholders.",
      date: "April 2024",
      featured: true,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Birthday Celebrant",
      event: "50th Birthday Party",
      image: "/placeholder.svg?height=80&width=80&text=ER",
      rating: 5,
      quote:
        "The attention to detail and personalized service exceeded all expectations. My 50th birthday celebration was elegant, sophisticated, and exactly what I had envisioned. The team listened to every request and delivered a party that my friends and family will remember forever. Absolutely worth every penny!",
      date: "May 2024",
      featured: false,
    },
    {
      id: 4,
      name: "David & Lisa Thompson",
      role: "Wedding Couple",
      event: "Rooftop Wedding",
      image: "/placeholder.svg?height=80&width=80&text=DL",
      rating: 5,
      quote:
        "From our first consultation to the last dance, Sweet Burst made our wedding planning journey enjoyable and stress-free. Their creativity in designing our rooftop ceremony was incredible, and the coordination on our wedding day was flawless. We couldn't have asked for a better team to bring our dream wedding to life.",
      date: "February 2024",
      featured: false,
    },
    {
      id: 5,
      name: "Jennifer Martinez",
      role: "Expectant Mother",
      event: "Baby Shower",
      image: "/placeholder.svg?height=80&width=80&text=JM",
      rating: 5,
      quote:
        "The cloud-themed baby shower was absolutely magical! Sweet Burst created such a dreamy atmosphere with beautiful decorations and the most adorable cake. All my guests were amazed by the attention to detail. The team made me feel so special during this important milestone in my life.",
      date: "March 2024",
      featured: false,
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "CEO",
      event: "Annual Company Gala",
      image: "/placeholder.svg?height=80&width=80&text=RK",
      rating: 5,
      quote:
        "Sweet Burst delivered an exceptional corporate gala that perfectly represented our company's prestige and values. The elegant setup, professional service, and seamless execution impressed all our clients and employees. They truly understand how to create memorable corporate experiences.",
      date: "January 2024",
      featured: false,
    },
    {
      id: 7,
      name: "Amanda Foster",
      role: "Mother of the Bride",
      event: "Wedding Reception",
      image: "/placeholder.svg?height=80&width=80&text=AF",
      rating: 5,
      quote:
        "As the mother of the bride, I was initially worried about all the details, but Sweet Burst took care of everything beautifully. They were patient with all our questions and changes, and delivered a wedding reception that was even more beautiful than we had imagined. Highly recommend!",
      date: "July 2024",
      featured: false,
    },
    {
      id: 8,
      name: "Michael Chang",
      role: "Birthday Celebrant",
      event: "Milestone Birthday",
      image: "/placeholder.svg?height=80&width=80&text=MC",
      rating: 5,
      quote:
        "My 40th birthday party was incredible thanks to Sweet Burst! They created a sophisticated celebration that perfectly matched my personality. The custom cake was not only beautiful but delicious, and the overall atmosphere was exactly what I wanted. Professional service from start to finish.",
      date: "August 2024",
      featured: false,
    },
  ]

  const featuredTestimonials = testimonials.filter((t) => t.featured)
  const regularTestimonials = testimonials.filter((t) => !t.featured)

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
              Client Reviews
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Stories of
              <span className="block text-transparent bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text">
                Celebration
              </span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Don't just take our word for it. Hear from our amazing clients about their experiences working with Sweet
              Burst to create their perfect celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="border-neutral-200 text-neutral-700 bg-neutral-50 px-4 py-2 rounded-full font-medium mb-6"
            >
              Featured Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Client Spotlights</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="p-8 border-0 bg-white shadow-xl rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-6 right-6 text-neutral-200">
                  <Quote className="w-12 h-12" />
                </div>
                <CardContent className="p-0 relative z-10">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-neutral-700 mb-8 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="w-15 h-15 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-neutral-900 text-lg">{testimonial.name}</div>
                        <div className="text-neutral-600 text-sm">{testimonial.role}</div>
                        <div className="text-neutral-500 text-xs">{testimonial.event}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-neutral-500 text-sm">{testimonial.date}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="border-neutral-200 text-neutral-700 bg-white px-4 py-2 rounded-full font-medium mb-6"
            >
              More Reviews
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 border-0 bg-white rounded-2xl shadow-lg h-fit">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-neutral-700 mb-6 text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-semibold text-neutral-900 text-sm">{testimonial.name}</div>
                        <div className="text-neutral-600 text-xs">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-neutral-500 text-xs">{testimonial.date}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">The Numbers Speak</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our client satisfaction and repeat business
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-2">500+</div>
              <div className="text-neutral-600">Events Planned</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-2">98%</div>
              <div className="text-neutral-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-2">5.0</div>
              <div className="text-neutral-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-2">85%</div>
              <div className="text-neutral-600">Repeat Clients</div>
            </div>
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
              Join Our Happy Clients
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">Ready to Create Your Own Story?</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Let us help you create a celebration that your guests will be talking about for years to come.
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
    </div>
  )
}
