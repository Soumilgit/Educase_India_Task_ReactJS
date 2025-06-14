"use client"

import { useState } from "react"
import WelcomeScreen from "@/components/WelcomeScreen"
import LoginScreen from "@/components/LoginScreen"
import RegisterScreen from "@/components/RegisterScreen"
import AccountSettings from "@/components/AccountSettings"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState("welcome")
  const [user, setUser] = useState(null)

  const navigateToScreen = (screen: string) => {
    setCurrentScreen(screen)
  }

  const handleLogin = (userData: any) => {
    setUser(userData)
    setCurrentScreen("account")
  }

  const handleRegister = (userData: any) => {
    setUser(userData)
    setCurrentScreen("account")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-sm mx-auto">
        {currentScreen === "welcome" && <WelcomeScreen onNavigate={navigateToScreen} />}
        {currentScreen === "login" && <LoginScreen onNavigate={navigateToScreen} onLogin={handleLogin} />}
        {currentScreen === "register" && <RegisterScreen onNavigate={navigateToScreen} onRegister={handleRegister} />}
        {currentScreen === "account" && <AccountSettings user={user} onNavigate={navigateToScreen} />}
      </div>
    </div>
  )
}
