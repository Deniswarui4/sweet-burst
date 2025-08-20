"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    console.log('Login button clicked')
    e.preventDefault()
    console.log('Form submission prevented')
    
    setIsLoading(true)
    setError(null)

    try {
      console.log('Getting form data...')
      const form = e.target as HTMLFormElement
      console.log('Form element:', form)
      
      const formData = new FormData(form)
      const email = formData.get('email') as string
      const password = formData.get('password') as string
      
      console.log('Form data:', { email, password })

      // Basic validation
      if (!email || !password) {
        console.log('Validation failed: Email and password are required')
        throw new Error('Email and password are required')
      }

      console.log('Simulating login...')
      // In a real app, you would make an API call to your authentication endpoint here
      // For now, we'll simulate a successful login
      await new Promise(resolve => {
        console.log('Starting login delay...')
        setTimeout(() => {
          console.log('Login delay complete')
          resolve(true)
        }, 1000)
      })
      
      console.log('Login successful, redirecting to dashboard...')
      // Redirect to dashboard on successful login
      router.push('/dashboard')
    } catch (err) {
      console.error('Login error:', err)
      setError(err instanceof Error ? err.message : 'An error occurred during login')
      setIsLoading(false)
    }
  }

  // Add a test function to manually trigger navigation
  const testNavigation = () => {
    console.log('Test navigation button clicked')
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Image
            src="/placeholder-logo.png"
            alt="Sweet Burst"
            width={160}
            height={100}
            className="h-16 w-auto mx-auto mb-4"
          />
          <Badge
            variant="outline"
            className="border-rose-200 text-rose-700 bg-rose-50 px-4 py-2 rounded-full font-medium mb-4"
          >
            Business Dashboard
          </Badge>
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600">Sign in to manage your Sweet Burst business</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@sweetburst.com"
                  defaultValue="admin@sweetburst.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  defaultValue="password"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full mb-4" 
                disabled={isLoading}
                onClick={() => console.log('Submit button clicked')}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
              
              {/* Test button to check if navigation works */}
              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                onClick={testNavigation}
              >
                Test Navigation to Dashboard
              </Button>
            </form>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Demo Credentials:</p>
              <p className="text-xs text-gray-500">Email: admin@sweetburst.com</p>
              <p className="text-xs text-gray-500">Password: password</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
