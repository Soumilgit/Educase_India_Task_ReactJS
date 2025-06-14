"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface RegisterScreenProps {
  onNavigate: (screen: string) => void
  onRegister: (userData: any) => void
}

export default function RegisterScreen({ onNavigate, onRegister }: RegisterScreenProps) {
  const [formData, setFormData] = useState({
    fullName: "Marry Doe",
    phoneNumber: "Marry Doe",
    email: "Marry Doe",
    password: "Marry Doe",
    companyName: "Marry Doe",
    isAgency: "yes",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleRegister = () => {
    onRegister(formData)
  }

  return (
    <div className="bg-white min-h-screen p-8 fabrikat-bold">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 fabrikat-bold">
          Create your
          <br />
          PopX account
        </h1>
      </div>

      <div className="space-y-6">
        <div className="floating-label-container">
          <label htmlFor="fullName" className="floating-label text-purple-custom text-lg leading-relaxed font-medium tracking-wide fabrikat">
            Full Name<span className="text-required-custom">*</span>
          </label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className="mt-2 border-gray-200 rounded py-3 px-4 text-gray-600 placeholder:text-placeholder-custom text-lg leading-relaxed font-medium tracking-wide fabrikat"
          />
        </div>

        <div className="floating-label-container">
          <label htmlFor="phoneNumber" className="floating-label text-purple-custom text-lg leading-relaxed font-medium tracking-wide fabrikat">
            Phone number<span className="text-required-custom">*</span>
          </label>
          <Input
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            className="mt-2 border-gray-200 rounded py-3 px-4 text-gray-600 placeholder:text-placeholder-custom text-lg leading-relaxed font-medium tracking-wide fabrikat"
          />
        </div>

        <div className="floating-label-container">
          <label htmlFor="email" className="floating-label text-purple-custom text-lg leading-relaxed font-medium tracking-wide fabrikat">
            Email address<span className="text-required-custom">*</span>
          </label>
          <Input
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="mt-2 border-gray-200 rounded py-3 px-4 text-gray-600 placeholder:text-placeholder-custom text-lg leading-relaxed font-medium tracking-wide fabrikat"
          />
        </div>

        <div className="floating-label-container">
          <label htmlFor="password" className="floating-label text-purple-custom text-lg leading-relaxed font-medium tracking-wide fabrikat">
            Password<span className="text-required-custom">*</span>
          </label>
          <Input
            id="password"
            type="text"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className="mt-2 border-gray-200 rounded py-3 px-4 text-gray-600 placeholder:text-placeholder-custom text-lg leading-relaxed font-medium tracking-wide fabrikat"
          />
        </div>

        <div className="floating-label-container">
          <label htmlFor="companyName" className="floating-label text-purple-custom text-lg leading-relaxed font-medium tracking-wide fabrikat">
            Company name
          </label>
          <Input
            id="companyName"
            value={formData.companyName}
            onChange={(e) => handleInputChange("companyName", e.target.value)}
            className="mt-2 border-gray-200 rounded py-3 px-4 text-gray-600 placeholder:text-placeholder-custom text-lg leading-relaxed font-medium tracking-wide fabrikat"
          />
        </div>

        <div>
          <Label className=" text-gray-600 placeholder:text-placeholder-custom text-lg leading-relaxed font-medium tracking-wide fabrikat">
            Are you an Agency?<span className="text-required-custom">*</span>
          </Label>
          <div className="flex gap-6">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="yes"
                name="agency"
                value="yes"
                checked={formData.isAgency === "yes"}
                onChange={(e) => handleInputChange("isAgency", e.target.value)}
                className="radio-button-custom"
              />
              <Label htmlFor="yes" className="text-gray-600 placeholder:text-placeholder-custom text-lg leading-relaxed font-medium tracking-wide fabrikat">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="no"
                name="agency"
                value="no"
                checked={formData.isAgency === "no"}
                onChange={(e) => handleInputChange("isAgency", e.target.value)}
                className="radio-button-custom"
              />
              <Label htmlFor="no" className="text-gray-600 placeholder:text-placeholder-custom text-lg leading-relaxed font-medium tracking-wide fabrikat">
                No
              </Label>
            </div>
          </div>
        </div>

        <Button
          onClick={handleRegister}
          className="w-full bg-create-button hover:bg-create-button/90 text-white py-4 rounded-xl text-base font-bold mt-8 fabrikat-bold"
        >
          Create Account
        </Button>
      </div>
    </div>
  )
}
