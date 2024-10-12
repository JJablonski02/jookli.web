"use client"

import { NextUIProvider } from "@nextui-org/system"
import { useRouter } from "next/navigation"

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
}

export default Providers
