import { createContext, useContext, useEffect, useState } from "react"
import { EncryptionManager } from "@/lib/encryption-manager"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const refreshToken = "refresh_token"

  useEffect(() => {
    initializeAuth()
  }, [])

  const initializeAuth = () => {
    try {
      const encryptedRefreshToken = EncryptionManager.readEncryptedDataFromLocalStorage(refreshToken)

      if (!encryptedRefreshToken) {
        return
      }

      const decryptedRefreshToken = EncryptionManager.decrypt(encryptedRefreshToken)

      if (!decryptedRefreshToken || decryptedRefreshToken.length !== 64) {
        onLogout()
        return
      }

    } catch (error) {
      onLogout()
    }
  }

  const onSignIn = (accessToken: string, refreshToken: string) => {
    setAccessToken(accessToken)
    const encryptedRefreshToken = EncryptionManager.encrypt(refreshToken)
    EncryptionManager.saveEncryptedItemToLocalStorage(refreshToken, encryptedRefreshToken)
  }

  const onLogout = () => {
    setAccessToken(null)
    localStorage.removeItem(refreshToken)
  }

  const value = {
    accessToken,
    onSignIn,
    onLogout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
