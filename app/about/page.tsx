"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Award, Users, Sparkles, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description:
        "We pour our heart into every detail, ensuring each event reflects the love and joy of the occasion.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from design to execution.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "We work closely with our clients to bring their unique vision to life through partnership.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Creativity",
      description: "We believe every celebration should be as unique as the people we're celebrating.",
    },
  ]

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Creative Director",
      image: "/8.jpg",
      bio: "With over 10 years in event planning, Sarah founded Sweet Burst to create truly personalized celebrations.",
    },
    {
      name: "Marcus Chen",
      role: "Head Cake Designer",
      image: "/placeholder.svg?height=400&width=400&text=Marcus+Chen",
      bio: "A culinary artist with a passion for creating edible masterpieces that taste as good as they look.",
    },
    {
      name: "Emily Rodriguez",
      role: "Event Coordinator",
      image: "/placeholder.svg?height=400&width=400&text=Emily+Rodriguez",
      bio: "Detail-oriented coordinator who ensures every event runs seamlessly from start to finish.",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navigation />
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge
                  variant="outline"
                  className="border-rose-200 text-rose-700 bg-rose-50 px-4 py-2 rounded-full font-medium"
                >
                  Our Story
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                  Creating Magic
                  <span className="block text-transparent bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text">
                    Since 2018
                  </span>
                </h1>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  What started as a passion for bringing people together has grown into a full-service event planning
                  company dedicated to creating unforgettable moments.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-full font-medium group"
              >
                Work With Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/8.jpeg"
                alt="Sweet Burst team"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="border-neutral-200 text-neutral-700 bg-white px-4 py-2 rounded-full font-medium mb-6"
            >
              Our Mission
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Why We Do What We Do</h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              We believe that life's most precious moments deserve to be celebrated in extraordinary ways. Our mission
              is to transform your vision into reality, creating experiences that you and your loved ones will treasure
              forever.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-neutral-900">Our Approach</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Every celebration tells a story. We take the time to understand your unique narrative, your style, and
                  your dreams. From intimate gatherings to grand celebrations, we craft each event with meticulous
                  attention to detail and a deep understanding of what makes your occasion special.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Our team combines creativity with logistics, ensuring that while you're enjoying your special day,
                  every detail is perfectly orchestrated behind the scenes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900 mb-2">500+</div>
                  <div className="text-sm text-neutral-600">Events Planned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-900 mb-2">6</div>
                  <div className="text-sm text-neutral-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Event+Planning+Process"
                alt="Our planning process"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="border-neutral-200 text-neutral-700 bg-neutral-50 px-4 py-2 rounded-full font-medium mb-6"
            >
              Our Values
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">What Drives Us</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group p-6 border-0 bg-white hover:shadow-xl transition-all duration-300 rounded-2xl h-fit"
              >
                <CardContent className="p-0 text-center">
                  <div className="p-3 bg-neutral-100 rounded-xl group-hover:bg-neutral-900 group-hover:text-white transition-colors w-fit mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">{value.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="border-neutral-200 text-neutral-700 bg-white px-4 py-2 rounded-full font-medium mb-6"
            >
              Meet The Team
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">The People Behind The Magic</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our passionate team brings together years of experience in event planning, design, and hospitality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group border-0 bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-1">{member.name}</h3>
                  <p className="text-neutral-600 text-sm mb-3">{member.role}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge
              variant="outline"
              className="border-neutral-200 text-neutral-700 bg-neutral-50 px-4 py-2 rounded-full font-medium"
            >
              Ready to Start?
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">Let's Create Your Perfect Event</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Ready to bring your vision to life? We'd love to hear about your upcoming celebration and how we can make
              it extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-full font-medium"
                asChild
              >
                <Link href="/contact">Get Started Today</Link>
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
