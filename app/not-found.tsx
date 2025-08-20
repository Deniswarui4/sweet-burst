"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white pt-20 flex items-center">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <Badge
              variant="outline"
              className="border-rose-200 text-rose-700 bg-rose-50 px-4 py-2 rounded-full font-medium"
            >
              404 Error
            </Badge>
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Oops! Page
                <span className="block text-transparent bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text">
                  Not Found
                </span>
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed max-w-lg">
                It looks like the page you're looking for doesn't exist or has been moved. Don't worry, let's get you
                back to planning your perfect event!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-full font-medium"
                asChild
              >
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-8 py-4 rounded-full font-medium bg-transparent"
                asChild
              >
                <Link href="/portfolio">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Portfolio
                </Link>
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-sm text-neutral-500 mb-4">Popular pages:</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href="/services"
                  className="text-sm text-neutral-600 hover:text-neutral-900 underline underline-offset-4"
                >
                  Our Services
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-neutral-600 hover:text-neutral-900 underline underline-offset-4"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-neutral-600 hover:text-neutral-900 underline underline-offset-4"
                >
                  Contact
                </Link>
                <Link
                  href="/testimonials"
                  className="text-sm text-neutral-600 hover:text-neutral-900 underline underline-offset-4"
                >
                  Reviews
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=500&text=404+Illustration"
                alt="Page not found illustration"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-rose-400 to-amber-400 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
