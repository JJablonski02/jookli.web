import { useState } from "react"

import { useAuth } from "@/providers/AuthProvider"

import { loginApi } from "../api/login-api"
import type { LoginCommand } from "../types/types"

export const useLogin = () => {
  const { setAccessToken, setRefreshToken } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = async (command: LoginCommand) => {
    setLoading(true)
    setError(null)

    try {
      const { access_token, refresh_token } = await loginApi(command)
      setAccessToken(access_token)
      setRefreshToken(refresh_token)
    } catch (err) {
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
