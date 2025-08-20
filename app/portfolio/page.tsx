"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Navigation from "@/components/navigation"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = ["All", "Weddings", "Birthdays", "Baby Showers", "Corporate", "Cakes"]

  const portfolioItems = [
    {
      id: 1,
      category: "Weddings",
      image: "/placeholder.svg?height=500&width=700&text=Elegant+Garden+Wedding",
      title: "Romantic Garden Wedding",
      description: "Intimate celebration with blush tones, natural elements, and custom floral arrangements",
      client: "Sarah & Michael",
      date: "June 2024",
      tags: ["Outdoor", "Romantic", "Floral"],
    },
    {
      id: 2,
      category: "Cakes",
      image: "/placeholder.svg?height=500&width=700&text=Three+Tier+Wedding+Cake",
      title: "Three-Tier Floral Cake",
      description: "Hand-crafted sugar flowers with vanilla bean cake and raspberry filling",
      client: "Wedding Reception",
      date: "June 2024",
      tags: ["Wedding", "Floral", "Multi-tier"],
    },
    {
      id: 3,
      category: "Birthdays",
      image: "/placeholder.svg?height=500&width=700&text=Milestone+Birthday+Party",
      title: "50th Birthday Celebration",
      description: "Sophisticated milestone celebration with gold accents and elegant table settings",
      client: "Jennifer's 50th",
      date: "May 2024",
      tags: ["Milestone", "Elegant", "Gold"],
    },
    {
      id: 4,
      category: "Corporate",
      image: "/placeholder.svg?height=500&width=700&text=Product+Launch+Event",
      title: "Tech Product Launch",
      description: "Modern corporate event with branded elements and interactive displays",
      client: "TechCorp Inc.",
      date: "April 2024",
      tags: ["Modern", "Branded", "Interactive"],
    },
    {
      id: 5,
      category: "Baby Showers",
      image: "/placeholder.svg?height=500&width=700&text=Cloud+Baby+Shower",
      title: "Cloud Nine Baby Shower",
      description: "Dreamy celebration with cloud decorations, soft pastels, and whimsical details",
      client: "Emma's Baby Shower",
      date: "March 2024",
      tags: ["Whimsical", "Pastels", "Clouds"],
    },
    {
      id: 6,
      category: "Cakes",
      image: "/placeholder.svg?height=500&width=700&text=Custom+Birthday+Cake",
      title: "Custom Character Cake",
      description: "Hand-sculpted character cake with chocolate ganache and vanilla buttercream",
      client: "Tommy's 5th Birthday",
      date: "March 2024",
      tags: ["Character", "Kids", "Sculpted"],
    },
    {
      id: 7,
      category: "Weddings",
      image: "/placeholder.svg?height=500&width=700&text=Modern+City+Wedding",
      title: "Urban Rooftop Wedding",
      description: "Contemporary celebration with city skyline views and minimalist design",
      client: "Alex & Jordan",
      date: "February 2024",
      tags: ["Urban", "Modern", "Rooftop"],
    },
    {
      id: 8,
      category: "Corporate",
      image: "/placeholder.svg?height=500&width=700&text=Annual+Gala",
      title: "Annual Company Gala",
      description: "Formal corporate gala with elegant lighting and sophisticated table settings",
      client: "Global Finance Ltd.",
      date: "January 2024",
      tags: ["Formal", "Gala", "Corporate"],
    },
  ]

  const filteredItems =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

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
              Our Portfolio
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Celebrating
              <span className="block text-transparent bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text">
                Life's Moments
              </span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Explore our collection of beautifully crafted events and custom creations. Each project tells a unique
              story and showcases our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-white sticky top-20 z-40 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-neutral-600 mr-4">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                className={`rounded-full font-medium transition-all ${
                  activeFilter === category
                    ? "bg-neutral-900 hover:bg-neutral-800 text-white"
                    : "border-neutral-300 text-neutral-700 hover:bg-neutral-50 bg-transparent"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={700}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className="border-neutral-200 text-neutral-600 bg-neutral-50 rounded-full text-xs"
                      >
                        {item.category}
                      </Badge>
                      <span className="text-xs text-neutral-500">{item.date}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-3">{item.description}</p>
                      <p className="text-xs text-neutral-500 font-medium">{item.client}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      className="text-neutral-600 hover:text-neutral-900 p-0 h-auto font-medium group text-sm"
                    >
                      View Details
                      <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-neutral-600 text-lg">No items found for the selected category.</p>
              <Button
                variant="outline"
                className="mt-4 border-neutral-300 text-neutral-700 hover:bg-neutral-50 bg-transparent"
                onClick={() => setActiveFilter("All")}
              >
                View All Projects
              </Button>
            </div>
          )}
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
              Inspired?
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">Let's Create Your Story</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Ready to see your vision come to life? Every project in our portfolio started with a dream and a
              conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-full font-medium"
                asChild
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-8 py-4 rounded-full font-medium bg-transparent"
                asChild
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
