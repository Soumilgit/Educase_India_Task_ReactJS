"use client"

import { Button } from "@/components/ui/button"

interface WelcomeScreenProps {
  onNavigate: (screen: string) => void
}

export default function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-end p-8 fabrikat-bold">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 fabrikat-bold">Welcome to PopX</h1>
        <p className="text-[#989B9E] text-lg leading-relaxed font-medium tracking-wide fabrikat">
  Lorem ipsum dolor sit amet,
  <br />
  consectetur adipiscing elit,
</p>

      </div>

      <div className="space-y-4 mb-8">
        <Button
          onClick={() => onNavigate("register")}
          className="w-full bg-create-button hover:bg-create-button/90 text-white py-4 rounded-xl text-base font-bold fabrikat-bold"
        >
          Create Account
        </Button>

        <Button
          onClick={() => onNavigate("login")}
          className="w-full bg-login-button hover:bg-login-button/90 text-gray-900 py-4 rounded-xl text-base font-bold fabrikat-bold border-0"
        >
          Already Registered? Login
        </Button>
      </div>
    </div>
  )
}
