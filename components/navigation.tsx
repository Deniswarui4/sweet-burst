"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/testimonials", label: "Reviews" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check if we're on the home page to determine if navbar should be transparent initially
  const isHomePage = pathname === "/"

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 border-b z-50 ${
        isHomePage && !isScrolled
          ? "bg-transparent border-transparent"
          : "bg-white/90 backdrop-blur-xl border-neutral-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 hover:bg-neutral-50/10 rounded-xl transition-colors ${
              isHomePage && !isScrolled ? "text-white" : "text-neutral-900"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Left navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  pathname === item.href
                    ? isHomePage && !isScrolled
                      ? "text-white"
                      : "text-neutral-900"
                    : isHomePage && !isScrolled
                      ? "text-white/80 hover:text-white"
                      : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Logo - centered */}
          <div className="flex-1 lg:flex-none flex justify-center">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Sweet Burst"
                width={140}
                height={90}
                className={`h-14 w-auto transition-all duration-300 ${
                  isHomePage && !isScrolled ? "brightness-0 invert" : ""
                }`}
              />
            </Link>
          </div>

          {/* Right navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.slice(3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  pathname === item.href
                    ? isHomePage && !isScrolled
                      ? "text-white"
                      : "text-neutral-900"
                    : isHomePage && !isScrolled
                      ? "text-white/80 hover:text-white"
                      : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                isHomePage && !isScrolled
                  ? "bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                  : "bg-neutral-900 hover:bg-neutral-800 text-white"
              }`}
              asChild
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile CTA */}
          <Button
            className={`lg:hidden px-4 py-2 rounded-full text-sm transition-all ${
              isHomePage && !isScrolled
                ? "bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                : "bg-neutral-900 hover:bg-neutral-800 text-white"
            }`}
            asChild
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className={`lg:hidden py-6 border-t transition-colors ${
              isHomePage && !isScrolled ? "border-white/20 bg-black/50 backdrop-blur-xl" : "border-neutral-100 bg-white"
            }`}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium py-2 transition-colors ${
                    pathname === item.href
                      ? isHomePage && !isScrolled
                        ? "text-white"
                        : "text-neutral-900"
                      : isHomePage && !isScrolled
                        ? "text-white/80 hover:text-white"
                        : "text-neutral-600 hover:text-neutral-900"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
