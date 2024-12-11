import { useState } from "react"
import { useAuth } from "@/providers/AuthProvider"
import { loginApi } from "../api/login-api"
import type { LoginCommand } from "../types/types"

export const useLogin = () => {
  const {onSignIn} = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = async (command: LoginCommand) => {
    setLoading(true)
    setError(null)

    try {
      const { access_token, refresh_token } = await loginApi(command)
      onSignIn(access_token, refresh_token)
    } catch (error) {
      setError("Nieprawidłowy email lub hasło")
    } finally {
      setLoading(false)
    }
  }

  return {
    login,
    error,
    loading,
  }
}
