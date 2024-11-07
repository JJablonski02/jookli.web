"use client"

import { NextUIProvider } from "@nextui-org/system"
import AuthProvider from "./AuthProvider"
import { useRouter } from "next/navigation"

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter()
    return (
        <NextUIProvider navigate={router.push}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </NextUIProvider>
    )
}

export default Providers
