"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function TestButtonPage() {
  const [clicked, setClicked] = useState(false)
  
  const handleClick = () => {
    console.log('Button clicked!')
    setClicked(true)
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-6">Button Test Page</h1>
      
      <div className="space-y-4 w-full max-w-md">
        {/* Test 1: Basic Button */}
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold mb-2">1. Basic Button</h2>
          <Button 
            onClick={handleClick}
            className="w-full"
          >
            Click Me
          </Button>
          <p className="mt-2 text-sm text-gray-600">
            {clicked ? '✅ Button was clicked!' : '❌ Button not clicked yet'}
          </p>
        </div>
        
        {/* Test 2: Native Button for Comparison */}
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold mb-2">2. Native Button (For Comparison)</h2>
          <button 
            onClick={handleClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
          >
            Native Button
          </button>
        </div>
        
        {/* Test 3: Navigation Test */}
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold mb-2">3. Navigation Test</h2>
          <Button 
            onClick={() => window.location.href = '/dashboard'}
            variant="outline"
            className="w-full"
          >
            Go to Dashboard (window.location)
          </Button>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg w-full max-w-md">
        <h2 className="font-semibold mb-2">Test Results</h2>
        <p className="text-sm">Check the browser console for logs when clicking buttons.</p>
        <p className="text-sm mt-2">If the native button works but the custom button doesn't, there might be an issue with the Button component.</p>
      </div>
    </div>
  )
}
