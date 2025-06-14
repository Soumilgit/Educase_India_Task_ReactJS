"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface LoginScreenProps {
  onNavigate: (screen: string) => void
  onLogin: (userData: any) => void
}

export default function LoginScreen({ onNavigate, onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (email && password) {
      onLogin({ email, name: "Marry Doe" })
    }
  }

  const isFormValid = email && password

  return (
    <div className="bg-white min-h-screen p-8 pt-12 fabrikat-bold">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 fabrikat-bold">
          Signin to your
          <br />
          PopX account
        </h1>
        <p className="text-[#989B9E] text-lg leading-relaxed font-medium tracking-wide fabrikat">
  Lorem ipsum dolor sit amet,
  <br />
  consectetur adipiscing elit,
</p>
      </div>

      <div className="space-y-6">
        <div className="floating-label-container">
          <Label htmlFor="email" className="floating-label text-purple-custom text-lg leading-relaxed font-medium tracking-wide fabrikat">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 border-gray-200 rounded py-3 px-4 text-gray-600 placeholder:text-placeholder-custom text-lg leading-relaxed font-medium tracking-wide fabrikat"
          />
        </div>

        <div className="floating-label-container">
          <Label htmlFor="password" className="floating-label text-purple-custom text-lg leading-relaxed font-medium tracking-wide fabrikat">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 border-gray-200 rounded py-3 px-4 text-gray-600 placeholder:text-placeholder-custom text-lg leading-relaxed font-medium tracking-wide fabrikat "
          />
        </div>

        <Button
          onClick={handleLogin}
          className={`w-full text-white py-4 rounded-xl text-base font-bold mt-8 fabrikat-bold ${
            isFormValid ? "bg-create-button hover:bg-create-button/90" : "bg-disabled-button"
          }`}
        >
          Login
        </Button>
      </div>
    </div>
  )
}
