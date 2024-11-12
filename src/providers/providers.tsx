"use client"

import { NextUIProvider } from "@nextui-org/system"
import { useRouter } from "next/navigation"

import { AuthProvider } from "./AuthProvider"

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()
  return (
    <NextUIProvider navigate={router.push}>
      <AuthProvider>{children}</AuthProvider>
    </NextUIProvider>
  )
}

export default Providers
