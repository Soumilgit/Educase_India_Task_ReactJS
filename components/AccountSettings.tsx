"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AccountSettingsProps {
  user: any
  onNavigate: (screen: string) => void
}

export default function AccountSettings({ user, onNavigate }: AccountSettingsProps) {
  return (
    <div className="bg-white min-h-screen p-8 pt-12 fabrikat-bold">
      <div className="mb-8">
        <h1 className="text-lg leading-relaxed font-medium tracking-wide fabrikat text-gray-800 mb-6 ">Account Settings</h1>

        <div className="bg-gray-50 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/download.png" alt="Profile" />
                <AvatarFallback className="bg-gray-300 text-gray-600 fabrikat-bold">MD</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-create-button rounded-full flex items-center justify-center">
                <Camera className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-sm leading-relaxed font-bold tracking-wide fabrikat text-gray-900 ">Marry Doe</h2>
              <p className="text-gray-600 text-sm leading-relaxed font-medium tracking-wide fabrikat">Marry@Gmail.Com</p>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed font-medium tracking-wide fabrikat">
            Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elit, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
            Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        <div className="mt-6 border-dashed-custom"></div>
      </div>
      <div className="mt-8">
        <Button
          onClick={() => onNavigate("welcome")}
          variant="outline"
          className="w-full border-gray-300 text-gray-700 py-3 rounded-xl"
        >
          Back to Welcome
        </Button>
      </div>

      <div className="mt-80 border-dashed-custom bottom-8 px-8"></div>
      
    </div>
  )
}
