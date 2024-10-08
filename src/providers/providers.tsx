"use client"

import { NextUIProvider } from "@nextui-org/system"

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>
}

export default Providers
