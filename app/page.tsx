"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Cake,
  Calendar,
  MapPin,
  Palette,
  Star,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Play,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
  const services = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Event Planning",
      description: "End-to-end event coordination with meticulous attention to detail",
      features: ["Timeline Management", "Vendor Coordination", "Day-of Execution"],
    },
    {
      icon: <Cake className="w-6 h-6" />,
      title: "Custom Cakes",
      description: "Artisanal cakes designed to be the centerpiece of your celebration",
      features: ["Custom Designs", "Premium Ingredients", "Dietary Options"],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Venue Curation",
      description: "Handpicked venues that perfectly match your vision and style",
      features: ["Location Scouting", "Venue Styling", "Setup Coordination"],
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design & Styling",
      description: "Cohesive design that brings your aesthetic vision to life",
      features: ["Color Palettes", "Floral Design", "Decor Styling"],
    },
  ]

  const portfolioItems = [
    {
      category: "Wedding",
      image: "/3.jpg",
      title: "Romantic Garden Wedding",
      description: "Intimate celebration with blush tones and natural elements",
    },
    {
      category: "Birthday",
      image: "/4.jpeg",
      title: "Milestone Birthday",
      description: "Sophisticated celebration with custom dessert table",
    },
    {
      category: "Corporate",
      image: "/6.jpg",
      title: "Product Launch",
      description: "Modern corporate event with branded elements",
    },
    {
      category: "Baby Shower",
      image: "/7.jpg",
      title: "Dreamy Baby Shower",
      description: "Soft pastels with whimsical cloud decorations",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Bride",
      image: "/placeholder.svg?height=60&width=60&text=SC",
      quote: "Sweet Burst transformed our vision into reality. Every detail was absolutely perfect.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Corporate Client",
      image: "/placeholder.svg?height=60&width=60&text=MJ",
      quote: "Professional, creative, and flawlessly executed. Our event was a huge success.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Birthday Client",
      image: "/placeholder.svg?height=60&width=60&text=ER",
      quote: "The attention to detail and personalized service exceeded all expectations.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/5.jpeg"
            alt="Beautiful event background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10 w-full">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge
                  variant="outline"
                  className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full font-medium"
                >
                  ✨ Premium Event Planning
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Creating
                  <span className="block text-transparent bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text">
                    Unforgettable
                  </span>
                  Moments
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                  From intimate celebrations to grand events, we craft experiences that reflect your unique story with
                  exquisite attention to detail.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-black px-8 py-4 rounded-full font-medium group"
                  asChild
                >
                  <Link href="/contact">
                    Start Planning
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-medium group bg-transparent"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Our Story
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/70">Events Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-white/70">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5★</div>
                  <div className="text-sm text-white/70">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="border-neutral-200 text-neutral-700 bg-white px-4 py-2 rounded-full font-medium mb-6"
            >
              Our Expertise
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">What We Do Best</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We specialize in creating cohesive, memorable experiences through our comprehensive suite of services
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group p-6 border-0 bg-white hover:shadow-xl transition-all duration-300 rounded-2xl h-fit"
              >
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 bg-neutral-100 rounded-xl group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900">{service.title}</h3>
                  </div>
                  <p className="text-neutral-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-neutral-500">
                        <div className="w-1 h-1 bg-neutral-300 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-neutral-600 hover:text-neutral-900 p-0 h-auto font-medium group mt-4 text-sm"
                    asChild
                  >
                    <Link href="/services">
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="border-neutral-200 text-neutral-700 bg-neutral-50 px-4 py-2 rounded-full font-medium mb-6"
            >
              Recent Work
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">Our Latest Creations</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Each event is uniquely crafted to tell your story and create lasting memories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <Badge
                    variant="outline"
                    className="border-neutral-200 text-neutral-600 bg-neutral-50 mb-3 rounded-full text-xs"
                  >
                    {item.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 mb-3 text-sm leading-relaxed">{item.description}</p>
                  <Button
                    variant="ghost"
                    className="text-neutral-600 hover:text-neutral-900 p-0 h-auto font-medium group text-sm"
                    asChild
                  >
                    <Link href="/portfolio">
                      View Details
                      <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-8 py-4 rounded-full font-medium bg-transparent"
              asChild
            >
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="border-neutral-200 text-neutral-700 bg-white px-4 py-2 rounded-full font-medium mb-6"
            >
              Client Love
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 bg-white rounded-2xl shadow-lg h-fit">
                <CardContent className="p-0">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-neutral-700 mb-4 text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
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
                      <div className="text-xs text-neutral-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-8 py-4 rounded-full font-medium bg-transparent"
              asChild
            >
              <Link href="/testimonials">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <Badge
                  variant="outline"
                  className="border-neutral-200 text-neutral-700 bg-neutral-50 px-4 py-2 rounded-full font-medium mb-6"
                >
                  Get In Touch
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                  Let's Create Something Beautiful Together
                </h2>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Ready to start planning your perfect event? We'd love to hear about your vision and bring it to life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-neutral-100 rounded-xl">
                    <Phone className="w-5 h-5 text-neutral-600" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">Call Us</div>
                    <div className="text-neutral-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-neutral-100 rounded-xl">
                    <Mail className="w-5 h-5 text-neutral-600" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">Email Us</div>
                    <div className="text-neutral-600">hello@sweetburst.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-neutral-100 rounded-xl">
                    <MessageCircle className="w-5 h-5 text-neutral-600" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">WhatsApp</div>
                    <div className="text-neutral-600">+1 (555) 123-4567</div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div className="text-sm text-neutral-500 mb-4">Follow our journey</div>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-neutral-200 text-neutral-600 hover:bg-neutral-50 rounded-full bg-transparent"
                  >
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-neutral-200 text-neutral-600 hover:bg-neutral-50 rounded-full bg-transparent"
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-neutral-200 text-neutral-600 hover:bg-neutral-50 rounded-full bg-transparent"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2 space-y-6">
              <Image
                src="/images/logo.png"
                alt="Sweet Burst"
                width={160}
                height={100}
                className="h-16 w-auto brightness-0 invert"
              />
              <p className="text-neutral-400 max-w-md leading-relaxed">
                Creating unforgettable moments through exceptional event planning and exquisite cake design. Your story,
                beautifully told.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neutral-700 text-neutral-400 hover:text-white hover:border-white bg-transparent rounded-full"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neutral-700 text-neutral-400 hover:text-white hover:border-white bg-transparent rounded-full"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neutral-700 text-neutral-400 hover:text-white hover:border-white bg-transparent rounded-full"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <ul className="space-y-3 text-neutral-400">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Event Planning
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Custom Cakes
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Venue Curation
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Design & Styling
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Company</h4>
              <ul className="space-y-3 text-neutral-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-white transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Sweet Burst. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 lg:hidden z-50">
        <Button className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-full p-4 shadow-2xl" asChild>
          <Link href="/contact">
            <MessageCircle className="w-6 h-6" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
